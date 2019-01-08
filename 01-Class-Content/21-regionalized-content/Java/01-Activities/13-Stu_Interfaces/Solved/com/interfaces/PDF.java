package com.interfaces;

class PDF implements Printable {

  private final String title;

  Book (String title, int pages) {
    this.title = title;
  }

  @Override int getPageCount () {
    // Do complicated calculation based on viewport size and length
  }

  @Override void print () {
    // Send to virtual printer or real printer depending on config
  }

  @Override void renderForPrinting () {
    // Change color values to CMYK, etc.
  }

}
