package com.herballife.main.model;

import android.database.Cursor;
import android.widget.Button;
import android.widget.TextView;

import com.herballife.main.R;

public class Penyakit {

    private String nama;
    private String bahanObat;
    private String tutorial;

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public String getBahanObat() {
        return bahanObat;
    }

    public void setBahanObat(String bahanObat) {
        this.bahanObat = bahanObat;
    }

    public String getTutorial() {
        return tutorial;
    }

    public void setTutorial(String tutorial) {
        this.tutorial = tutorial;
    }
}
