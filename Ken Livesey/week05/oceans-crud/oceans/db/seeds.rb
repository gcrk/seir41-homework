Ocean.destroy_all

Ocean.create :name => 'Pacific', :location => 'seperates Asia & Australia', :area => 168723000, :volume => 669880000, :avg_depth => 3970, :coastline => 135663
Ocean.create :name => 'Atlantic', :location => 'seperates the Americas from Europe & Africa', :area => 85133000, :volume => 310410900, :avg_depth => 3646, :coastline => 111866
Ocean.create :name => 'Indian', :location => 'seperates Africa & Australia', :area => 70560000, :volume => 264000000, :avg_depth => 3741, :coastline => 66526
Ocean.create :name => 'Southern', :location => 'encircles Antarctica', :area => 21960000, :volume => 71800000, :avg_depth => 3270, :coastline => 17968

puts "#{ Ocean.count } oceans on Earth."
