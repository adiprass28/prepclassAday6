function kabisat(n) {
  if (n % 4 != 0) {
    return 'Bukan kabisat'
  } else if (n % 100 != 0 && n % 4 == 0) {
    return 'Kabisat'
  } else if (n % 100 == 0 && n % 400 != 0)  {
    return 'Bukan Kabisat'
  } else {
    return 'Kabisat'
  }
}

