package com.interfaces;

interface DatabaseService {

  protected void delete (Object object);

  protected void insert (Object object);

  protected void replace (int id, Object object);

  protected void retrieve (int id);

  protected void update (Object object);

}
