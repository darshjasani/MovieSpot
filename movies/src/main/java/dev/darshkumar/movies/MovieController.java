package dev.darshkumar.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

// api layer
@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/v1/movies")
public class MovieController {
    @Autowired
    private MovieService movieService;
    @GetMapping
    public ResponseEntity<List<Movie>> getallMovies(){
        return new ResponseEntity<List<Movie>>(movieService.allMovies(), HttpStatus.OK);
    }

//    @GetMapping("/{id}")
//    public  ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable ObjectId id){
//        return new ResponseEntity<>(movieService.singleMovie(id), HttpStatus.OK);
//    }

    @GetMapping("/{imdbId}")
    public  ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String imdbId){
        return new ResponseEntity<>(movieService.singleMovie(imdbId), HttpStatus.OK);
    }
}
