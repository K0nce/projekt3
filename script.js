$(document).ready(function() {
    const $list = $('#shoppingList');
    const $input = $('#productInput');

    // Funkcja tworząca nowy element listy
    function createItem(text) {
        return $('<li></li>')
            .text(text)
            .addClass('list-group-item');
    }

    // 1. Dodawanie produktów
    $('#addBtn, #addEndBtn').click(function() {
        let val = $input.val();
        if(val) {
            $list.append(createItem(val));
            $input.val('');
        }
    });

    $('#addStartBtn').click(function() {
        let val = $input.val();
        if(val) {
            $list.prepend(createItem(val));
            $input.val('');
        }
    });

    // 2. Usuwanie i czyszczenie
    $('#removeLastBtn').click(function() {
        $list.children().last().remove();
    });

    $('#clearBtn').click(function() {
        $list.empty();
    });

    $('#restoreBtn').click(function() {
        const example = '<li>Chleb</li><li>Mleko</li><li>Jajka</li>';
        $list.html(example);
        $list.children().addClass('list-group-item');
    });

    // 3. Edycja elementu (Click -> Input)
    $list.on('click', 'li', function(e) {
        if ($(e.target).is('input')) return; // Zapobiega pętli przy kliknięciu w input

        let $li = $(this);
        let currentText = $li.text();

        $li.fadeOut(300, function() {
            let $editInput = $('<input type="text">').val(currentText);
            $li.html($editInput).fadeIn(300);
            $editInput.focus();

            $editInput.keypress(function(event) {
                if (event.which === 13) { // Enter
                    let newText = $(this).val();
                    $li.fadeOut(300, function() {
                        $li.text(newText).fadeIn(300);
                    });
                }
            });
        });
        
        $li.toggleClass('active'); // Podświetlenie
    });

    // 4. Zaawansowane operacje
    $('#colorEvenBtn').click(function() {
        $list.find('li:even').css('background-color', '#f0f0f0');
    });

    $('#sortBtn').click(function() {
        let items = $list.children('li').get();
        items.sort(function(a, b) {
            return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
        });
        $.each(items, function(idx, itm) { $list.append(itm); });
    });

    $('#filterInput').on('keyup', function() {
        let value = $(this).val().toLowerCase();
        $list.find('li').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    // 5. jQuery UI Drag & Drop
    $list.sortable();
});