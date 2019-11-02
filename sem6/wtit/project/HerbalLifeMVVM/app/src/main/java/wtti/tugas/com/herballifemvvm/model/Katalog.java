package com.herballife.main.model;

import android.graphics.Bitmap;

public class Katalog {
    private String nama;
    private String kegunaan;
    private Bitmap gambar;

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public String getKegunaan() {
        return kegunaan;
    }

    public void setKegunaan(String kegunaan) {
        this.kegunaan = kegunaan;
    }

    public Bitmap getGambar() {
        return gambar;
    }

    public void setGambar(Bitmap gambar) {
        this.gambar = gambar;
    }
}
