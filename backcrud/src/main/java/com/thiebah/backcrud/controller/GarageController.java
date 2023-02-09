package com.thiebah.backcrud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.thiebah.backcrud.model.Car;
import com.thiebah.backcrud.service.GarageService;

@CrossOrigin(origins  = "http://localhost:4200")
@RestController
public class GarageController {

    @Autowired
    private GarageService garageService;

    @RequestMapping("/cars")
    public List<Car> getCars() {
        return garageService.getCars();
    }

    @RequestMapping("/car/{id}")
    public Car getCar(@PathVariable long id) {
        return garageService.getCar(id);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/car/{id}")
    public void deleteCar(@PathVariable long id) {
        garageService.deleteCar(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/cars")
    public void addCar(@RequestBody  Car car){
        garageService.addCar(car);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/car/{id}")
    public void updateCar(@RequestBody Car car, @PathVariable long id) {
        garageService.updateCar(car, id);
    }
}
