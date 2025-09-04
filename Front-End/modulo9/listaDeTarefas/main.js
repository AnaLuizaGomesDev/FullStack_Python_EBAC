$(document).ready(function () {

    $(function () {
        //sistema de drag and drop
        $('ul').sortable({
            placeholder: "ui-state-highlight",
            axis: "y"
        });
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        const nomeItem = $('input').val();
        const novoItem = $(`
            <li>
                <span class = "tarefa">${nomeItem}</span>
                <button type="button">🗑️</button>
            </li>
        `);

        //adiciona na lista
        $(novoItem).appendTo('ul');

        //mosta a ul caso esteja escondida
        if ($('ul').is(':hidden')) {
            $('ul').slideDown(300);
        }

        // marca a tarefa como concluida
        novoItem.find('.tarefa').on('click', function () {
            $(this).toggleClass('concluida');
        });

        novoItem.find('button').on('click', function () {
            novoItem.remove();

            if ($('ul li').length === 0) {
                $('ul').slideUp(300);
            }
        });

        //limpa o campo input depois de adicionar a tarefa
        $('input').val('');
    })
})