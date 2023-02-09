package com.thiebah.backcrud.model;

// import java.util.List;

// import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

// import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Car {
    public enum Color {
        RED, GREEN, BLUE, YELLOW, BLACK, BROWN, WHITE, PINK, PURPLE, CYAN, GRAY
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String model;
    private String brand;
    private int  createdAt;
    private int ch;
    // @ElementCollection
    // @JsonFormat(shape=JsonFormat.Shape.ARRAY)
    // private List<Color> colors;
    private String picture;
    
    
    public Car() {}
    public Car(long id, String model, String brand, int createdAt, int ch, /*List<Color> color,*/ String picture) {
        super();
        this.id = id;
        this.model = model;
        this.brand = brand;
        this.createdAt = createdAt;

        this.ch = ch;
        // this.colors=color;
        this.picture = picture;
    }

    
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }
    public void setModel(String model) {
        this.model = model;
    }
    public String getBrand() {
        return brand;
    }
    public void setBrand(String brand) {
        this.brand = brand;
    }
    public int getcreatedAt() {
        return createdAt;
    }
    public void setcreatedAt(int createdAt) {
        this.createdAt = createdAt;
    }
    public int getch() {
        return ch;
    }
    public void setch(int ch) {
        this.ch = ch;
    }
    // public List<Color> getColor() {
    //     return colors;
    // }
    // public void setColor(Color color) {
    //     this.colors.add(color);
    // }

    public String getPicture() {
        return picture;
    }
    public void setPicture(String picture) {
        this.picture = picture;
    }
    
}
