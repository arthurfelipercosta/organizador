// src/services/carService.ts

// import de pacotes
import AsyncStorage from '@react-native-async-storage/async-storage';

// import de arquivos
import { Carro, NewCarro } from '@/types/carTypes';

const CARS_STORAGE_KEY = '@organizador:cars';

export const getCars = async (): Promise<Carro[]> => {
    try {
        const jsonValue = await AsyncStorage.getItem(CARS_STORAGE_KEY);
        return jsonValue !== null ? JSON.parse(jsonValue) : [];
    } catch (error) {
        console.error('Erro ao buscar carros: ', error);
        return [];
    }
};

export const saveCars = async (cars: Carro[]): Promise<void> => {
    try {
        const jsonValue = JSON.stringify(cars);
        await AsyncStorage.setItem(CARS_STORAGE_KEY, jsonValue);
    } catch (e) {
        console.error('Erro ao salvar carros:', e);
    }
};

export const addCar = async (newCar: NewCarro): Promise<Carro> => {
    const cars = await getCars();
    const carWithId: Carro = { ...newCar, id: Date.now().toString() }; // Gera um ID simples
    cars.push(carWithId);
    await saveCars(cars);
    return carWithId;
};

export const updateCar = async (updatedCar: Carro): Promise<void> => {
    const cars = await getCars();
    const index = cars.findIndex(c => c.id === updatedCar.id);
    if (index > -1) {
        cars[index] = updatedCar;
        await saveCars(cars);
    } else {
        throw new Error('Carro não encontrado para atualização.');
    }
};

export const deleteCar = async (id: string): Promise<void> => {
    const cars = await getCars();
    const filteredCars = cars.filter(c => c.id !== id);
    await saveCars(filteredCars);
};

export const getCarById = async (id: string): Promise<Carro | undefined> => {
    const cars = await getCars();
    return cars.find(car => car.id === id);
};