package com.example.webapi.webapi.repository;

import com.example.webapi.webapi.models.Tour;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource
@Repository
public interface TourRepository extends CrudRepository<Tour, Integer> {

}