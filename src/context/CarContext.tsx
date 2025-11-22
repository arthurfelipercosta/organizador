// src/context/CarContext.tsx

// import de pacotes
import React, { createContext, useState, useEffect, useContext } from 'react';

// import de arquivos
import { Carro, NewCarro } from '@/types/carTypes';
import { getCars, addCar, updateCar, deleteCar } from '@/services/carService';

interface CarContextType {
    cars: Carro[];
    loading: boolean;
    addCarItem: (newCar: NewCarro) => Promise<void>;
    updateCarItem: (updateCar: Carro) => Promise<void>;
    deleteCarItem: (id: string) => Promise<void>;
    refreshCars: () => Promise<void>;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export const CarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cars, setCars] = useState<Carro[]>([]);
    const [loading, setLoading] = useState(true);

    const loadCars = async () => {
        setLoading(true);
        const loadedCars = await getCars();
        setCars(loadedCars);
        setLoading(false);
    };

    useEffect(() => {
        loadCars();
    }, []);

    const refreshCars = async () => {
        await loadCars();
    };

    const addCarItem = async (newCar: NewCarro) => {
        await addCar(newCar);
        await loadCars();
    };

    const updateCarItem = async (updatedCar: Carro) => {
        await updateCar(updatedCar);
        await loadCars();
    };

    const deleteCarItem = async (id: string) => {
        await deleteCar(id);
        await loadCars();
    };

    return (
        <CarContext.Provider value={{ cars, loading, addCarItem, updateCarItem, deleteCarItem, refreshCars }}>
            {children}
        </CarContext.Provider>
    );
};

export const useCars = () => {
    const context = useContext(CarContext);
    if (context === undefined) {
      throw new Error('useCars must be used within a CarProvider');
    }
    return context;
  };