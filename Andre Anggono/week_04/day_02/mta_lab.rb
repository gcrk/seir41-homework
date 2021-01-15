subway = {
  :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  :L => ["8th", "6th", "Union Square", "3rd", "1st"],
  6 => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

def plan_trip (from_line, from_station, to_line, to_station)
is_same_line = from_line == to_line # bool check if the trip is on the same line
interchange = 'Union Square' # interchange value for central ref point


end

def stops (line, from_station, to_station)


end

class Planner
  @@gvar = "i am gvar"
  
  def stops
    puts gvar
    @@varinstops = "im a var in stops"
  end

  def render
    puts self.varinstops
    puts varinstops
  end
end
