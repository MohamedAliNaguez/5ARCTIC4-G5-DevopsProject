package tn.esprit.spring.services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import tn.esprit.spring.entities.Course;
import tn.esprit.spring.entities.TypeCourse;
import tn.esprit.spring.repositories.ICourseRepository;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

public class CourseServicesImplTest {

    @Mock
    private ICourseRepository courseRepository;

    @InjectMocks
    private CourseServicesImpl courseServices;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testRetrieveAllCourses() {
        Course course1 = new Course();
        course1.setNumCourse(1L);
        course1.setLevel(1);
        course1.setTypeCourse(TypeCourse.BEGINNER);
        course1.setPrice(100.0f);
        course1.setTimeSlot(2);

        Course course2 = new Course();
        course2.setNumCourse(2L);
        course2.setLevel(2);
        course2.setTypeCourse(TypeCourse.INTERMEDIATE);
        course2.setPrice(200.0f);
        course2.setTimeSlot(3);

        List<Course> courses = Arrays.asList(course1, course2);

        when(courseRepository.findAll()).thenReturn(courses);

        List<Course> result = courseServices.retrieveAllCourses();
        assertEquals(2, result.size());
        assertEquals(1L, result.get(0).getNumCourse());
        assertEquals(2L, result.get(1).getNumCourse());
    }

    @Test
    public void testAddCourse() {
        Course course = new Course();
        course.setNumCourse(1L);
        course.setLevel(1);
        course.setTypeCourse(TypeCourse.BEGINNER);
        course.setPrice(100.0f);
        course.setTimeSlot(2);

        when(courseRepository.save(any(Course.class))).thenReturn(course);

        Course result = courseServices.addCourse(course);
        assertEquals(1L, result.getNumCourse());
        assertEquals(1, result.getLevel());
        assertEquals(TypeCourse.BEGINNER, result.getTypeCourse());
        assertEquals(100.0f, result.getPrice());
        assertEquals(2, result.getTimeSlot());
    }

    @Test
    public void testUpdateCourse() {
        Course course = new Course();
        course.setNumCourse(1L);
        course.setLevel(1);
        course.setTypeCourse(TypeCourse.BEGINNER);
        course.setPrice(150.0f);
        course.setTimeSlot(2);

        when(courseRepository.save(any(Course.class))).thenReturn(course);

        Course result = courseServices.updateCourse(course);
        assertEquals(1L, result.getNumCourse());
        assertEquals(1, result.getLevel());
        assertEquals(TypeCourse.BEGINNER, result.getTypeCourse());
        assertEquals(150.0f, result.getPrice());
        assertEquals(2, result.getTimeSlot());
    }

    @Test
    public void testRetrieveCourse() {
        Course course = new Course();
        course.setNumCourse(1L);
        course.setLevel(1);
        course.setTypeCourse(TypeCourse.BEGINNER);
        course.setPrice(100.0f);
        course.setTimeSlot(2);

        when(courseRepository.findById(1L)).thenReturn(Optional.of(course));

        Course result = courseServices.retrieveCourse(1L);
        assertEquals(1L, result.getNumCourse());
        assertEquals(1, result.getLevel());
        assertEquals(TypeCourse.BEGINNER, result.getTypeCourse());
        assertEquals(100.0f, result.getPrice());
        assertEquals(2, result.getTimeSlot());
    }
}
