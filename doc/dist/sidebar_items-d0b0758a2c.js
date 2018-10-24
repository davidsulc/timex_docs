sidebarNodes={"extras":[{"id":"api-reference","title":"API Reference","group":"","headers":[{"id":"Modules","anchor":"modules"},{"id":"Timex","anchor":"timex"},{"id":"Exceptions","anchor":"exceptions"}]},{"id":"getting-started","title":"Getting Started","group":"","headers":[{"id":"Project Setup","anchor":"project-setup"}]},{"id":"changelog","title":"Change Log","group":"","headers":[{"id":"Unreleased","anchor":"unreleased"},{"id":"3.4.1","anchor":"3-4-1"},{"id":"3.4.0","anchor":"3-4-0"},{"id":"3.1.13","anchor":"3-1-13"},{"id":"3.1.6-12","anchor":"3-1-6-12"},{"id":"3.1.6","anchor":"3-1-6"},{"id":"3.1.5","anchor":"3-1-5"},{"id":"3.1","anchor":"3-1"},{"id":"3.0.8","anchor":"3-0-8"},{"id":"3.0.7","anchor":"3-0-7"},{"id":"3.0.6","anchor":"3-0-6"},{"id":"3.0.5","anchor":"3-0-5"},{"id":"3.0.3","anchor":"3-0-3"},{"id":"3.0.2","anchor":"3-0-2"},{"id":"3.0.1","anchor":"3-0-1"},{"id":"3.0.0","anchor":"3-0-0"},{"id":"2.1.3","anchor":"2-1-3"},{"id":"2.1.2","anchor":"2-1-2"},{"id":"2.1.1","anchor":"2-1-1"},{"id":"2.1.0","anchor":"2-1-0"},{"id":"Fixed","anchor":"fixed"},{"id":"2.0.0","anchor":"2-0-0"},{"id":"1.0.2","anchor":"1-0-2"}]},{"id":"basic-usage","title":"Basic Usage","group":"","headers":[{"id":"Getting the date/time","anchor":"getting-the-date-time"},{"id":"Construction","anchor":"construction"},{"id":"Parsing date/time strings","anchor":"parsing-date-time-strings"},{"id":"Formatting DateTimes","anchor":"formatting-datetimes"},{"id":"Testing if one event occurs in an interval","anchor":"testing-if-one-event-occurs-in-an-interval"}]},{"id":"erlang-interop","title":"Erlang Interop","group":"","headers":[{"id":"Erlang Dates and Times","anchor":"erlang-dates-and-times"}]},{"id":"formatting","title":"Formatting","group":"","headers":[]},{"id":"parsing","title":"Parsing","group":"","headers":[]},{"id":"faq","title":"Frequently Asked Questions","group":"","headers":[]},{"id":"using-with-ecto","title":"Using with Ecto","group":"","headers":[]},{"id":"custom-parsers","title":"Custom Parsers","group":"","headers":[{"id":"Getting Started","anchor":"getting-started"},{"id":"Tokenizer Implementation","anchor":"tokenizer-implementation"},{"id":"Implementation Notes","anchor":"implementation-notes"},{"id":"Usage","anchor":"usage"}]},{"id":"custom-formatters","title":"Custom Formatters","group":"","headers":[]}],"exceptions":[{"id":"Timex.Format.FormatError","title":"Timex.Format.FormatError","nested_title":"FormatError","nested_context":"Timex.Format","group":""},{"id":"Timex.Interval.FormatError","title":"Timex.Interval.FormatError","group":""},{"id":"Timex.Parse.ParseError","title":"Timex.Parse.ParseError","group":""}],"modules":[{"id":"Timex","title":"Timex","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"between_options/0","anchor":"t:between_options/0"},{"id":"set_options/0","anchor":"t:set_options/0"},{"id":"shift_options/0","anchor":"t:shift_options/0"}]},{"key":"functions","name":"Functions","nodes":[{"id":"add/2","anchor":"add/2"},{"id":"after?/2","anchor":"after?/2"},{"id":"before?/2","anchor":"before?/2"},{"id":"beginning_of_day/1","anchor":"beginning_of_day/1"},{"id":"beginning_of_month/1","anchor":"beginning_of_month/1"},{"id":"beginning_of_month/2","anchor":"beginning_of_month/2"},{"id":"beginning_of_quarter/1","anchor":"beginning_of_quarter/1"},{"id":"beginning_of_week/2","anchor":"beginning_of_week/2"},{"id":"beginning_of_year/1","anchor":"beginning_of_year/1"},{"id":"between?/4","anchor":"between?/4"},{"id":"century/0","anchor":"century/0"},{"id":"century/1","anchor":"century/1"},{"id":"compare/2","anchor":"compare/2"},{"id":"compare/3","anchor":"compare/3"},{"id":"day/1","anchor":"day/1"},{"id":"day_name/1","anchor":"day_name/1"},{"id":"day_shortname/1","anchor":"day_shortname/1"},{"id":"day_to_num/1","anchor":"day_to_num/1"},{"id":"days_in_month/1","anchor":"days_in_month/1"},{"id":"days_in_month/2","anchor":"days_in_month/2"},{"id":"days_to_beginning_of_week/2","anchor":"days_to_beginning_of_week/2"},{"id":"days_to_end_of_week/2","anchor":"days_to_end_of_week/2"},{"id":"diff/2","anchor":"diff/2"},{"id":"diff/3","anchor":"diff/3"},{"id":"end_of_day/1","anchor":"end_of_day/1"},{"id":"end_of_month/1","anchor":"end_of_month/1"},{"id":"end_of_month/2","anchor":"end_of_month/2"},{"id":"end_of_quarter/1","anchor":"end_of_quarter/1"},{"id":"end_of_quarter/2","anchor":"end_of_quarter/2"},{"id":"end_of_week/2","anchor":"end_of_week/2"},{"id":"end_of_year/1","anchor":"end_of_year/1"},{"id":"epoch/0","anchor":"epoch/0"},{"id":"equal?/3","anchor":"equal?/3"},{"id":"format!/2","anchor":"format!/2"},{"id":"format!/3","anchor":"format!/3"},{"id":"format/2","anchor":"format/2"},{"id":"format/3","anchor":"format/3"},{"id":"format_duration/1","anchor":"format_duration/1"},{"id":"format_duration/2","anchor":"format_duration/2"},{"id":"from_iso_day/1","anchor":"from_iso_day/1"},{"id":"from_iso_day/2","anchor":"from_iso_day/2"},{"id":"from_iso_triplet/1","anchor":"from_iso_triplet/1"},{"id":"from_now/1","anchor":"from_now/1"},{"id":"from_now/2","anchor":"from_now/2"},{"id":"from_now/3","anchor":"from_now/3"},{"id":"from_unix/2","anchor":"from_unix/2"},{"id":"is_leap?/1","anchor":"is_leap?/1"},{"id":"is_valid?/1","anchor":"is_valid?/1"},{"id":"is_valid_time?/1","anchor":"is_valid_time?/1"},{"id":"is_valid_timezone?/1","anchor":"is_valid_timezone?/1"},{"id":"iso_triplet/1","anchor":"iso_triplet/1"},{"id":"iso_week/1","anchor":"iso_week/1"},{"id":"iso_week/3","anchor":"iso_week/3"},{"id":"lformat!/3","anchor":"lformat!/3"},{"id":"lformat!/4","anchor":"lformat!/4"},{"id":"lformat/3","anchor":"lformat/3"},{"id":"lformat/4","anchor":"lformat/4"},{"id":"lformat_duration/2","anchor":"lformat_duration/2"},{"id":"lformat_duration/3","anchor":"lformat_duration/3"},{"id":"local/0","anchor":"local/0"},{"id":"local/1","anchor":"local/1"},{"id":"month_name/1","anchor":"month_name/1"},{"id":"month_shortname/1","anchor":"month_shortname/1"},{"id":"month_to_num/1","anchor":"month_to_num/1"},{"id":"normalize/2","anchor":"normalize/2"},{"id":"now/0","anchor":"now/0"},{"id":"now/1","anchor":"now/1"},{"id":"parse!/2","anchor":"parse!/2"},{"id":"parse!/3","anchor":"parse!/3"},{"id":"parse/2","anchor":"parse/2"},{"id":"parse/3","anchor":"parse/3"},{"id":"quarter/1","anchor":"quarter/1"},{"id":"set/2","anchor":"set/2"},{"id":"shift/2","anchor":"shift/2"},{"id":"start/2","anchor":"start/2"},{"id":"subtract/2","anchor":"subtract/2"},{"id":"timezone/2","anchor":"timezone/2"},{"id":"timezones/0","anchor":"timezones/0"},{"id":"to_date/1","anchor":"to_date/1"},{"id":"to_datetime/1","anchor":"to_datetime/1"},{"id":"to_datetime/2","anchor":"to_datetime/2"},{"id":"to_erl/1","anchor":"to_erl/1"},{"id":"to_gregorian_microseconds/1","anchor":"to_gregorian_microseconds/1"},{"id":"to_gregorian_seconds/1","anchor":"to_gregorian_seconds/1"},{"id":"to_julian/1","anchor":"to_julian/1"},{"id":"to_naive_datetime/1","anchor":"to_naive_datetime/1"},{"id":"to_unix/1","anchor":"to_unix/1"},{"id":"today/0","anchor":"today/0"},{"id":"validate_format/1","anchor":"validate_format/1"},{"id":"validate_format/2","anchor":"validate_format/2"},{"id":"week_of_month/1","anchor":"week_of_month/1"},{"id":"week_of_month/3","anchor":"week_of_month/3"},{"id":"weekday/1","anchor":"weekday/1"},{"id":"zero/0","anchor":"zero/0"}]}]},{"id":"Timex.AmbiguousDateTime","title":"Timex.AmbiguousDateTime","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"t/0","anchor":"t:t/0"}]}]},{"id":"Timex.AmbiguousTimezoneInfo","title":"Timex.AmbiguousTimezoneInfo","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"t/0","anchor":"t:t/0"}]},{"key":"functions","name":"Functions","nodes":[{"id":"new/2","anchor":"new/2"}]}]},{"id":"Timex.Calendar.Julian","title":"Timex.Calendar.Julian","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"day_of_week/2","anchor":"day_of_week/2"},{"id":"day_of_week/4","anchor":"day_of_week/4"},{"id":"julian_date/1","anchor":"julian_date/1"},{"id":"julian_date/3","anchor":"julian_date/3"},{"id":"julian_date/6","anchor":"julian_date/6"}]}]},{"id":"Timex.Comparable","title":"Timex.Comparable","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"comparable/0","anchor":"t:comparable/0"},{"id":"compare_result/0","anchor":"t:compare_result/0"},{"id":"constants/0","anchor":"t:constants/0"},{"id":"diff_result/0","anchor":"t:diff_result/0"},{"id":"granularity/0","anchor":"t:granularity/0"},{"id":"t/0","anchor":"t:t/0"}]},{"key":"functions","name":"Functions","nodes":[{"id":"compare/3","anchor":"compare/3"},{"id":"diff/3","anchor":"diff/3"}]}]},{"id":"Timex.Duration","title":"Timex.Duration","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"measurement_units/0","anchor":"t:measurement_units/0"},{"id":"t/0","anchor":"t:t/0"},{"id":"to_options/0","anchor":"t:to_options/0"},{"id":"units/0","anchor":"t:units/0"}]},{"key":"functions","name":"Functions","nodes":[{"id":"abs/1","anchor":"abs/1"},{"id":"add/2","anchor":"add/2"},{"id":"diff/3","anchor":"diff/3"},{"id":"elapsed/3","anchor":"elapsed/3"},{"id":"epoch/0","anchor":"epoch/0"},{"id":"epoch/1","anchor":"epoch/1"},{"id":"from_clock/1","anchor":"from_clock/1"},{"id":"from_days/1","anchor":"from_days/1"},{"id":"from_erl/1","anchor":"from_erl/1"},{"id":"from_hours/1","anchor":"from_hours/1"},{"id":"from_microseconds/1","anchor":"from_microseconds/1"},{"id":"from_milliseconds/1","anchor":"from_milliseconds/1"},{"id":"from_minutes/1","anchor":"from_minutes/1"},{"id":"from_seconds/1","anchor":"from_seconds/1"},{"id":"from_time/1","anchor":"from_time/1"},{"id":"from_weeks/1","anchor":"from_weeks/1"},{"id":"invert/1","anchor":"invert/1"},{"id":"measure/1","anchor":"measure/1"},{"id":"measure/2","anchor":"measure/2"},{"id":"measure/3","anchor":"measure/3"},{"id":"normalize/1","anchor":"normalize/1"},{"id":"now/1","anchor":"now/1"},{"id":"parse!/1","anchor":"parse!/1"},{"id":"parse!/2","anchor":"parse!/2"},{"id":"parse/1","anchor":"parse/1"},{"id":"parse/2","anchor":"parse/2"},{"id":"scale/2","anchor":"scale/2"},{"id":"sub/2","anchor":"sub/2"},{"id":"to_clock/1","anchor":"to_clock/1"},{"id":"to_days/1","anchor":"to_days/1"},{"id":"to_days/2","anchor":"to_days/2"},{"id":"to_erl/1","anchor":"to_erl/1"},{"id":"to_hours/1","anchor":"to_hours/1"},{"id":"to_hours/2","anchor":"to_hours/2"},{"id":"to_microseconds/1","anchor":"to_microseconds/1"},{"id":"to_microseconds/2","anchor":"to_microseconds/2"},{"id":"to_milliseconds/1","anchor":"to_milliseconds/1"},{"id":"to_milliseconds/2","anchor":"to_milliseconds/2"},{"id":"to_minutes/1","anchor":"to_minutes/1"},{"id":"to_minutes/2","anchor":"to_minutes/2"},{"id":"to_seconds/1","anchor":"to_seconds/1"},{"id":"to_seconds/2","anchor":"to_seconds/2"},{"id":"to_string/1","anchor":"to_string/1"},{"id":"to_time!/1","anchor":"to_time!/1"},{"id":"to_time/1","anchor":"to_time/1"},{"id":"to_weeks/1","anchor":"to_weeks/1"},{"id":"to_weeks/2","anchor":"to_weeks/2"},{"id":"zero/0","anchor":"zero/0"}]}]},{"id":"Timex.Format.DateTime.Formatter","title":"Timex.Format.DateTime.Formatter","nested_title":"DateTime.Formatter","nested_context":"Timex.Format","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"format!/3","anchor":"format!/3"},{"id":"format/3","anchor":"format/3"},{"id":"format_token/5","anchor":"format_token/5"},{"id":"format_token/6","anchor":"format_token/6"},{"id":"lformat!/4","anchor":"lformat!/4"},{"id":"lformat/4","anchor":"lformat/4"},{"id":"validate/2","anchor":"validate/2"}]},{"key":"callbacks","name":"Callbacks","nodes":[{"id":"format!/2","anchor":"c:format!/2"},{"id":"format/2","anchor":"c:format/2"},{"id":"lformat!/3","anchor":"c:lformat!/3"},{"id":"lformat/3","anchor":"c:lformat/3"},{"id":"tokenize/1","anchor":"c:tokenize/1"}]}]},{"id":"Timex.Format.DateTime.Formatters.Default","title":"Timex.Format.DateTime.Formatters.Default","nested_title":"DateTime.Formatters.Default","nested_context":"Timex.Format","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"format!/2","anchor":"format!/2"},{"id":"format/2","anchor":"format/2"},{"id":"format/3","anchor":"format/3"},{"id":"lformat!/3","anchor":"lformat!/3"},{"id":"lformat/3","anchor":"lformat/3"},{"id":"lformat/4","anchor":"lformat/4"},{"id":"tokenize/1","anchor":"tokenize/1"}]}]},{"id":"Timex.Format.DateTime.Formatters.Relative","title":"Timex.Format.DateTime.Formatters.Relative","nested_title":"DateTime.Formatters.Relative","nested_context":"Timex.Format","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"format!/2","anchor":"format!/2"},{"id":"format/2","anchor":"format/2"},{"id":"lformat!/3","anchor":"lformat!/3"},{"id":"lformat/3","anchor":"lformat/3"},{"id":"relative_to/3","anchor":"relative_to/3"},{"id":"relative_to/4","anchor":"relative_to/4"},{"id":"tokenize/1","anchor":"tokenize/1"}]}]},{"id":"Timex.Format.DateTime.Formatters.Strftime","title":"Timex.Format.DateTime.Formatters.Strftime","nested_title":"DateTime.Formatters.Strftime","nested_context":"Timex.Format","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"format!/2","anchor":"format!/2"},{"id":"format/2","anchor":"format/2"},{"id":"lformat!/3","anchor":"lformat!/3"},{"id":"lformat/3","anchor":"lformat/3"},{"id":"tokenize/1","anchor":"tokenize/1"}]}]},{"id":"Timex.Format.Duration.Formatter","title":"Timex.Format.Duration.Formatter","nested_title":"Formatter","nested_context":"Timex.Format.Duration","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"format/1","anchor":"format/1"},{"id":"format/2","anchor":"format/2"},{"id":"lformat/2","anchor":"lformat/2"},{"id":"lformat/3","anchor":"lformat/3"}]},{"key":"callbacks","name":"Callbacks","nodes":[{"id":"format/1","anchor":"c:format/1"},{"id":"lformat/2","anchor":"c:lformat/2"}]}]},{"id":"Timex.Format.Duration.Formatters.Default","title":"Timex.Format.Duration.Formatters.Default","nested_title":"Formatters.Default","nested_context":"Timex.Format.Duration","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"format/1","anchor":"format/1"},{"id":"lformat/2","anchor":"lformat/2"}]}]},{"id":"Timex.Format.Duration.Formatters.Humanized","title":"Timex.Format.Duration.Formatters.Humanized","nested_title":"Formatters.Humanized","nested_context":"Timex.Format.Duration","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"format/1","anchor":"format/1"},{"id":"lformat/2","anchor":"lformat/2"}]}]},{"id":"Timex.Gettext","title":"Timex.Gettext","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"dgettext/3","anchor":"dgettext/3"},{"id":"dgettext_noop/2","anchor":"dgettext_noop/2"},{"id":"dngettext/5","anchor":"dngettext/5"},{"id":"dngettext_noop/3","anchor":"dngettext_noop/3"},{"id":"gettext/2","anchor":"gettext/2"},{"id":"gettext_comment/1","anchor":"gettext_comment/1"},{"id":"gettext_noop/1","anchor":"gettext_noop/1"},{"id":"handle_missing_bindings/2","anchor":"handle_missing_bindings/2"},{"id":"lgettext/4","anchor":"lgettext/4"},{"id":"lngettext/6","anchor":"lngettext/6"},{"id":"ngettext/4","anchor":"ngettext/4"},{"id":"ngettext_noop/2","anchor":"ngettext_noop/2"}]}]},{"id":"Timex.Interval","title":"Timex.Interval","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"t/0","anchor":"t:t/0"},{"id":"valid_interval_step/0","anchor":"t:valid_interval_step/0"},{"id":"valid_interval_steps/0","anchor":"t:valid_interval_steps/0"},{"id":"valid_step_unit/0","anchor":"t:valid_step_unit/0"}]},{"key":"functions","name":"Functions","nodes":[{"id":"contains?/2","anchor":"contains?/2"},{"id":"duration/2","anchor":"duration/2"},{"id":"format!/3","anchor":"format!/3"},{"id":"format/3","anchor":"format/3"},{"id":"new/1","anchor":"new/1"},{"id":"overlaps?/2","anchor":"overlaps?/2"},{"id":"with_step/2","anchor":"with_step/2"}]}]},{"id":"Timex.Parse.DateTime.Parser","title":"Timex.Parse.DateTime.Parser","nested_title":"Parser","nested_context":"Timex.Parse.DateTime","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"parse!/3","anchor":"parse!/3"},{"id":"parse/2","anchor":"parse/2"},{"id":"parse/3","anchor":"parse/3"}]}]},{"id":"Timex.Parse.DateTime.Parsers.ISO8601Extended","title":"Timex.Parse.DateTime.Parsers.ISO8601Extended","nested_title":"Parsers.ISO8601Extended","nested_context":"Timex.Parse.DateTime","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"parser/0","anchor":"t:parser/0"},{"id":"previous_parser/0","anchor":"t:previous_parser/0"}]},{"key":"functions","name":"Functions","nodes":[{"id":"parse/1","anchor":"parse/1"},{"id":"parse_extended/1","anchor":"parse_extended/1"},{"id":"parse_extended/4","anchor":"parse_extended/4"},{"id":"parse_fractional_seconds/3","anchor":"parse_fractional_seconds/3"},{"id":"parse_offset/3","anchor":"parse_offset/3"},{"id":"parse_offset/4","anchor":"parse_offset/4"}]}]},{"id":"Timex.Parse.DateTime.Tokenizer","title":"Timex.Parse.DateTime.Tokenizer","nested_title":"Tokenizer","nested_context":"Timex.Parse.DateTime","group":"","nodeGroups":[{"key":"callbacks","name":"Callbacks","nodes":[{"id":"apply/3","anchor":"c:apply/3"},{"id":"tokenize/1","anchor":"c:tokenize/1"}]}]},{"id":"Timex.Parse.DateTime.Tokenizers.Default","title":"Timex.Parse.DateTime.Tokenizers.Default","nested_title":"Tokenizers.Default","nested_context":"Timex.Parse.DateTime","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"apply/3","anchor":"apply/3"},{"id":"tokenize/1","anchor":"tokenize/1"}]}]},{"id":"Timex.Parse.DateTime.Tokenizers.Strftime","title":"Timex.Parse.DateTime.Tokenizers.Strftime","nested_title":"Tokenizers.Strftime","nested_context":"Timex.Parse.DateTime","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"apply/3","anchor":"apply/3"},{"id":"tokenize/1","anchor":"tokenize/1"}]}]},{"id":"Timex.Parse.Duration.Parser","title":"Timex.Parse.Duration.Parser","nested_title":"Parser","nested_context":"Timex.Parse.Duration","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"parse!/1","anchor":"parse!/1"},{"id":"parse!/2","anchor":"parse!/2"},{"id":"parse/1","anchor":"parse/1"},{"id":"parse/2","anchor":"parse/2"}]},{"key":"callbacks","name":"Callbacks","nodes":[{"id":"parse/1","anchor":"c:parse/1"}]}]},{"id":"Timex.Parse.Duration.Parsers.ISO8601Parser","title":"Timex.Parse.Duration.Parsers.ISO8601Parser","nested_title":"Parsers.ISO8601Parser","nested_context":"Timex.Parse.Duration","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"parse/1","anchor":"parse/1"}]}]},{"id":"Timex.Parse.Timezones.Posix","title":"Timex.Parse.Timezones.Posix","nested_title":"Posix","nested_context":"Timex.Parse.Timezones","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"parse/1","anchor":"parse/1"}]}]},{"id":"Timex.Parse.Timezones.Posix.PosixTimezone","title":"Timex.Parse.Timezones.Posix.PosixTimezone","nested_title":"Posix.PosixTimezone","nested_context":"Timex.Parse.Timezones","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"__struct__/0","anchor":"__struct__/0"}]}]},{"id":"Timex.Parse.ZoneInfo.Parser","title":"Timex.Parse.ZoneInfo.Parser","nested_title":"Parser","nested_context":"Timex.Parse.ZoneInfo","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"parse/1","anchor":"parse/1"}]}]},{"id":"Timex.Parse.ZoneInfo.Parser.Zone","title":"Timex.Parse.ZoneInfo.Parser.Zone","nested_title":"Parser.Zone","nested_context":"Timex.Parse.ZoneInfo","group":""},{"id":"Timex.Protocol","title":"Timex.Protocol","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"t/0","anchor":"t:t/0"}]},{"key":"functions","name":"Functions","nodes":[{"id":"beginning_of_day/1","anchor":"beginning_of_day/1"},{"id":"beginning_of_month/1","anchor":"beginning_of_month/1"},{"id":"beginning_of_quarter/1","anchor":"beginning_of_quarter/1"},{"id":"beginning_of_week/2","anchor":"beginning_of_week/2"},{"id":"beginning_of_year/1","anchor":"beginning_of_year/1"},{"id":"century/1","anchor":"century/1"},{"id":"day/1","anchor":"day/1"},{"id":"days_in_month/1","anchor":"days_in_month/1"},{"id":"end_of_day/1","anchor":"end_of_day/1"},{"id":"end_of_month/1","anchor":"end_of_month/1"},{"id":"end_of_quarter/1","anchor":"end_of_quarter/1"},{"id":"end_of_week/2","anchor":"end_of_week/2"},{"id":"end_of_year/1","anchor":"end_of_year/1"},{"id":"from_iso_day/2","anchor":"from_iso_day/2"},{"id":"is_leap?/1","anchor":"is_leap?/1"},{"id":"is_valid?/1","anchor":"is_valid?/1"},{"id":"iso_week/1","anchor":"iso_week/1"},{"id":"quarter/1","anchor":"quarter/1"},{"id":"set/2","anchor":"set/2"},{"id":"shift/2","anchor":"shift/2"},{"id":"to_date/1","anchor":"to_date/1"},{"id":"to_datetime/2","anchor":"to_datetime/2"},{"id":"to_erl/1","anchor":"to_erl/1"},{"id":"to_gregorian_microseconds/1","anchor":"to_gregorian_microseconds/1"},{"id":"to_gregorian_seconds/1","anchor":"to_gregorian_seconds/1"},{"id":"to_julian/1","anchor":"to_julian/1"},{"id":"to_naive_datetime/1","anchor":"to_naive_datetime/1"},{"id":"to_unix/1","anchor":"to_unix/1"},{"id":"week_of_month/1","anchor":"week_of_month/1"},{"id":"weekday/1","anchor":"weekday/1"}]}]},{"id":"Timex.Time","title":"Timex.Time","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"to_12hour_clock/1","anchor":"to_12hour_clock/1"},{"id":"to_24hour_clock/2","anchor":"to_24hour_clock/2"}]}]},{"id":"Timex.Timezone","title":"Timex.Timezone","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"beginning_of_day/1","anchor":"beginning_of_day/1"},{"id":"convert/2","anchor":"convert/2"},{"id":"diff/2","anchor":"diff/2"},{"id":"end_of_day/1","anchor":"end_of_day/1"},{"id":"exists?/1","anchor":"exists?/1"},{"id":"get/2","anchor":"get/2"},{"id":"local/0","anchor":"local/0"},{"id":"local/1","anchor":"local/1"},{"id":"name_of/1","anchor":"name_of/1"},{"id":"resolve/3","anchor":"resolve/3"},{"id":"total_offset/1","anchor":"total_offset/1"},{"id":"total_offset/2","anchor":"total_offset/2"},{"id":"tzdata_to_timezone/2","anchor":"tzdata_to_timezone/2"}]}]},{"id":"Timex.Timezone.Local","title":"Timex.Timezone.Local","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"gregorian_seconds/0","anchor":"t:gregorian_seconds/0"}]},{"key":"functions","name":"Functions","nodes":[{"id":"lookup/0","anchor":"lookup/0"},{"id":"lookup/1","anchor":"lookup/1"},{"id":"parse_tzfile/1","anchor":"parse_tzfile/1"},{"id":"parse_tzfile/2","anchor":"parse_tzfile/2"}]}]},{"id":"Timex.TimezoneInfo","title":"Timex.TimezoneInfo","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"datetime/0","anchor":"t:datetime/0"},{"id":"day_of_week/0","anchor":"t:day_of_week/0"},{"id":"from_constraint/0","anchor":"t:from_constraint/0"},{"id":"offset/0","anchor":"t:offset/0"},{"id":"t/0","anchor":"t:t/0"},{"id":"until_constraint/0","anchor":"t:until_constraint/0"}]},{"key":"functions","name":"Functions","nodes":[{"id":"create/6","anchor":"create/6"}]}]},{"id":"Timex.Translator","title":"Timex.Translator","group":"","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"id":"current_locale/0","anchor":"current_locale/0"},{"id":"default_locale/0","anchor":"default_locale/0"},{"id":"get_day_periods/1","anchor":"get_day_periods/1"},{"id":"get_months/1","anchor":"get_months/1"},{"id":"get_months_abbreviated/1","anchor":"get_months_abbreviated/1"},{"id":"get_weekdays/1","anchor":"get_weekdays/1"},{"id":"get_weekdays_abbreviated/1","anchor":"get_weekdays_abbreviated/1"},{"id":"translate/3","anchor":"translate/3"},{"id":"translate_plural/5","anchor":"translate_plural/5"},{"id":"with_locale/2","anchor":"with_locale/2"}]}]},{"id":"Timex.Types","title":"Timex.Types","group":"","nodeGroups":[{"key":"types","name":"Types","nodes":[{"id":"calendar_types/0","anchor":"t:calendar_types/0"},{"id":"date/0","anchor":"t:date/0"},{"id":"datetime/0","anchor":"t:datetime/0"},{"id":"day/0","anchor":"t:day/0"},{"id":"daynum/0","anchor":"t:daynum/0"},{"id":"hour/0","anchor":"t:hour/0"},{"id":"iso_triplet/0","anchor":"t:iso_triplet/0"},{"id":"megaseconds/0","anchor":"t:megaseconds/0"},{"id":"microsecond/0","anchor":"t:microsecond/0"},{"id":"microsecond_datetime/0","anchor":"t:microsecond_datetime/0"},{"id":"microsecond_time/0","anchor":"t:microsecond_time/0"},{"id":"microseconds/0","anchor":"t:microseconds/0"},{"id":"minute/0","anchor":"t:minute/0"},{"id":"month/0","anchor":"t:month/0"},{"id":"num_of_days/0","anchor":"t:num_of_days/0"},{"id":"second/0","anchor":"t:second/0"},{"id":"seconds/0","anchor":"t:seconds/0"},{"id":"shift_units/0","anchor":"t:shift_units/0"},{"id":"std_offset/0","anchor":"t:std_offset/0"},{"id":"time/0","anchor":"t:time/0"},{"id":"time_units/0","anchor":"t:time_units/0"},{"id":"time_zone/0","anchor":"t:time_zone/0"},{"id":"timestamp/0","anchor":"t:timestamp/0"},{"id":"tz_offset/0","anchor":"t:tz_offset/0"},{"id":"utc_offset/0","anchor":"t:utc_offset/0"},{"id":"valid_date/0","anchor":"t:valid_date/0"},{"id":"valid_datetime/0","anchor":"t:valid_datetime/0"},{"id":"valid_time/0","anchor":"t:valid_time/0"},{"id":"valid_timezone/0","anchor":"t:valid_timezone/0"},{"id":"week_of_month/0","anchor":"t:week_of_month/0"},{"id":"weekday/0","anchor":"t:weekday/0"},{"id":"weekday_name/0","anchor":"t:weekday_name/0"},{"id":"weeknum/0","anchor":"t:weeknum/0"},{"id":"weekstart/0","anchor":"t:weekstart/0"},{"id":"year/0","anchor":"t:year/0"},{"id":"zone_abbr/0","anchor":"t:zone_abbr/0"}]}]}],"tasks":[]}