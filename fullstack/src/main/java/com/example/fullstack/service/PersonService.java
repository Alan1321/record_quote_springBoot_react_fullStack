package com.example.fullstack.service;

import com.example.fullstack.model.Person;

import java.util.List;

public interface PersonService {
    public Person savePerson(Person person);
    public List<Person> getAllPerson();
}
