package org.example.microservice_courses.Professor.application;

import org.example.microservice_courses.Professor.domain.Professor;
import org.example.microservice_courses.Professor.domain.ProfessorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/professors")
public class ProfessorController {
    @Autowired
    private ProfessorService professorService;

    @GetMapping
    public List<Professor> getAllProfessors() {
        return professorService.getAllProfessors();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Professor> getProfessorById(@PathVariable Long id) {
        Professor professor = professorService.getProfessorById(id);
        return ResponseEntity.ok(professor);
    }

    @GetMapping("/by-email/{email}")
    public ResponseEntity<Professor> getProfessorByEmail(@PathVariable String email) {
        Professor professor = professorService.getProfessorByEmail(email);
        return ResponseEntity.ok(professor);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProfessor(@PathVariable Long id) {
        professorService.deleteProfessor(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Professor> updateProfessor(@PathVariable Long id, @RequestBody Professor professor) {
        Professor updatedProfessor = professorService.updateProfessor(id, professor);
        return ResponseEntity.ok(updatedProfessor);
    }

    @PostMapping
    public ResponseEntity<Professor> createProfessor(@RequestBody Professor professor) {
        Professor createdProfessor = professorService.createProfessor(professor);
        return ResponseEntity.ok(createdProfessor);
    }
}