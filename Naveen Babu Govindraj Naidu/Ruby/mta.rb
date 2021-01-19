$lines = {
  'n' => ['TS','34th','28th','23rd','US','8th'],
  'l' => ['8','6th','US','3rd','1st'],
  'six' => ['GC','33rd','28','23rd','US','AP']
}

def plan_trip (start_line, get_in, end_line, get_off)

    getin_index = $lines[start_line].index(get_in)
    start_inter_index = $lines[start_line].index('US')
    end_inter_index = $lines[end_line].index('US')
    getoff_Index = $lines[end_line].index(get_off)
    stops1 = start_inter_index.to_i - (getin_index.to_i + 1)
    # puts stops1
    stops2 = (end_inter_index.to_i - getoff_Index.to_i).abs
    # puts stops2
    total_stops = stops1 + stops2
    puts total_stops
    stops = ''
    for i in get_off
      stops += i
      puts stops
    end






end
plan_trip('n','TS','n','8th')
