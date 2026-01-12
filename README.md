# Interaktywna Lista Zakupów (jQuery)

Prosta i funkcjonalna aplikacja webowa do zarządzania listą zakupów, stworzona w celu przećwiczenia manipulacji strukturą DOM za pomocą biblioteki jQuery.

## 🚀 Funkcje aplikacji

* **Zarządzanie produktami:** Dodawanie elementów na początku i na końcu listy, usuwanie ostatniego elementu oraz całkowite czyszczenie listy.
* **Edycja dynamiczna:** Możliwość zmiany nazwy produktu po kliknięciu (z efektem przejścia `fadeOut` / `fadeIn`).
* **Interaktywność:** Podświetlanie wybranych elementów (klasa `active`) oraz wizualne wyróżnienie co drugiego produktu.
* **Zaawansowane operacje:**
    * **Sortowanie:** Alfabetyczne układanie produktów.
    * **Filtrowanie:** Wyszukiwanie produktów na liście w czasie rzeczywistym.
    * **Drag & Drop:** Przeciąganie i upuszczanie elementów w celu zmiany ich kolejności (dzięki jQuery UI).
* **Przywracanie danych:** Funkcja wstawiania przykładowych danych za pomocą metody `.html()`.

## 🛠️ Użyte metody jQuery

W projekcie wykorzystano szereg metod oferowanych przez bibliotekę jQuery:
* **Manipulacja DOM:** `.append()`, `.prepend()`, `.remove()`, `.empty()`, `.html()`, `.text()`.
* **Zdarzenia:** `.click()`, `.on('keypress')`, `.on('keyup')`.
* **Style i klasy:** `.addClass()`, `.toggleClass()`, `.css()`, `.filter()`.
* **Efekty:** `.fadeOut()`, `.fadeIn()`, `.toggle()`.
* **Inne:** `.sortable()` (jQuery UI), `.val()`, `.find()`.

## 📂 Struktura plików
* `index.html` – Struktura strony.
* `style.css` – Warstwa wizualna.
* `script.js` – Logika aplikacji w jQuery.
