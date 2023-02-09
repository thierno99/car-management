package com.thiebah.backcrud.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.thiebah.backcrud.model.Car;
import com.thiebah.backcrud.repository.GarageRepository;

/**
 * GarageService
 */
@Service
public class GarageService {

    @Autowired
    private GarageRepository garageRepository;

    // static private List<Car> cars = new ArrayList<>( Arrays.asList(
    //     new Car(1,"Aventador","Lamborghini", 2012, 750, Car.Color.BLACK),
    //     new Car(2,"Chiron","Bugatti", 2012, 750, Car.Color.BLACK),
    //     new Car(3,"Urus","Lamborghini", 2018, 750, Car.Color.BLACK),
    //     new Car(4,"Sian","Lamborghini", 2020, 750, Car.Color.BLACK),
    //     new Car(5,"Aventador","Lamborghini", 2012, 750, Car.Color.BLACK),
    //     new Car(6,"Huracan","Lamborghini", 2014, 610, Car.Color.BLACK),
    //     new Car(7,"Veneno","Lamborghini", 2012, 750, Car.Color.BLACK),
    //     new Car(8,"Centenario","Lamborghini", 2017, 950, Car.Color.BLACK)
    // ));

    public List<Car> getCars() {
        List<Car> cars = new ArrayList<>();
        garageRepository.findAll().forEach(car -> {
            cars.add(car);
        });
        return cars;
    }
    
    public Car getCar(long id) {
        // return getCars().stream().filter(car -> car.getId() == id).findFirst().orElse(null) ;
        return garageRepository.findById(id).orElse(null);
    }

    public void deleteCar(long id) {
        // cars.removeIf(car -> car.getId() == id);
        garageRepository.deleteById(id);
    }

    public void addCar(Car car) {
        // cars.add(car);
        garageRepository.save(car);
    }

    public void updateCar(Car car, long id) {
        // cars.forEach(c ->{
        //     if(c.getId() == id) {
        //         cars.set(cars.indexOf(c), car);
        //     }
        // });

        garageRepository.save(car);
    }

}