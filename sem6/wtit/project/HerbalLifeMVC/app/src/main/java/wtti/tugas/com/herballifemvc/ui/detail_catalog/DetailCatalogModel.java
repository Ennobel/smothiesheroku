package wtti.tugas.com.herballifemvc.ui.detail_catalog;

import android.content.Context;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;

import wtti.tugas.com.herballifemvc.base.BaseModel;

public class DetailCatalogModel extends BaseModel<Detail_katalog> {

    public DetailCatalogModel(Context context) {
        super(context);
    }

    public void getCatalog(String catalog){
        Cursor c = addSubscribe("select * from Katalog where Nama ='"+ catalog +"'");
        c.moveToFirst();
        int index1 = c.getColumnIndex("Kegunaan");
        int index3 = c.getColumnIndex("Gambar");
        byte[] image_byte = c.getBlob(index3);
        Bitmap image = BitmapFactory.decodeByteArray(image_byte, 0, image_byte.length);
        String use = c.getString(index1);
        delegate.onSuccessGetCatalog(use, image);
    }
}
