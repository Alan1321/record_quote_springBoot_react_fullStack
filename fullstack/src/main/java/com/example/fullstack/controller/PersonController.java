package com.example.fullstack.controller;

import com.example.fullstack.model.Person;
import com.example.fullstack.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/person")
@CrossOrigin
public class PersonController {
    @Autowired
    private PersonService personService;

    @PostMapping("/add")
    public String add(@RequestBody Person person) {
        personService.savePerson(person);
        return "New Person added";
    }

    @GetMapping("/getAll")
    public List<Person> list(){
        return personService.getAllPerson();
    }
}
