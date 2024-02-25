package com.example.backend.service;

import com.example.backend.model.Person;

import java.util.List;

public interface PersonService {
    public Person savePerson(Person person);
    public List<Person> getAllPerson();
}
