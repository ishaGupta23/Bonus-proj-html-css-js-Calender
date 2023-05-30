$(document).ready(function () {
    const monthSelect = $('#month');
    const yearSelect = $('#year');
    const dateInput = $('#date');
    const calendar = $('#calendar');
    const changeBtn = $('#changeBtn');
  
    // Populate the calendar with days
    function renderCalendar() {
      calendar.empty();
  
      const month = parseInt(monthSelect.val());
      const year = parseInt(yearSelect.val());
  
      const daysInMonth = new Date(year, month, 0).getDate();
  
      for (let i = 1; i <= daysInMonth; i++) {
        const day = $('<div class="cell">' + i + '</div>');
        calendar.append(day);
      }
  
      // Add click event handler to date cells
      calendar.find('.cell').on('click', function() {
        $(this).toggleClass('green ');
      });
    }
  
    // Change the background color of the inputted date cell
    function changeDateCellColor() {
      const inputDate = new Date(dateInput.val());
      const days = calendar.find('.cell');
  
      days.each(function () {
        const day = $(this);
        const dayDate = new Date(yearSelect.val(), monthSelect.val() - 1, day.text());
  
        if (inputDate.toDateString() === dayDate.toDateString()) {
          day.addClass('green');
          day.removeClass('white');
        } else {
          day.removeClass('green');
          day.addClass('white');
        }
      });
    }
  
    monthSelect.on('change', renderCalendar);
    yearSelect.on('change', renderCalendar);
    changeBtn.on('click', changeDateCellColor);
    dateInput.on('keydown', function (event) {
      if (event.key === 'Enter') {
        changeDateCellColor();
        event.preventDefault();
      }
    });
  
    renderCalendar();
  });
  