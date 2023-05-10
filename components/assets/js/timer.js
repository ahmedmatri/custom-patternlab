let TimerDate = $('.hsTimerData').html();
$('.countdown')
  .countdown(TimerDate)
  .on('update.countdown', function (event) {
    var $this = $(this).html(
      event.strftime(
        '' +
          '<div class="countdown_list"> <span class="countdown--days number">%-d</span> <span class="countdown--days-text smalltext">day%!d</span></div>' +
          '<div class="countdown_list"> <span class="countdown--hours number">%H</span> <span class="countdown--hours-text smalltext">Hours </span></div>' +
          '<div class="countdown_list"> <span class="countdown--minutes number">%M</span> <span class="countdown--minutes-text smalltext"> Minutes </span></div>' +
          '<div class="countdown_list"> <span class="countdown--seconds number">%S</span> <span class="countdown--seconds-text smalltext"> Seconds </span></div>',
      ),
    );
  });
