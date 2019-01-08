package com.interfaces;

class Book implements Printable {

  private final String title;

  private final int pages;

  Book (String title, int pages) {
    this.title = title;
    this.pages = pages;
  }

  @Override int getPageCount () {
    return this.pages;
  }

  @Override void print () {
    // Send to real printer
  }

  @Override void renderForPrinting () {
    // Reset margins, etc., such that text is justified on page
  }

}
