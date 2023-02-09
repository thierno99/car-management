package com.thiebah.backcrud.repository;

import org.springframework.data.repository.CrudRepository;

import com.thiebah.backcrud.model.Car;

public interface GarageRepository extends CrudRepository<Car, Long>{
    
}
