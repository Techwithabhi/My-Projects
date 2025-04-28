
### Calculate House expence in a month and divide expence equialy to the members

## Input we need from user 
# Total rent for a month
# Total Grocery expance for a month
# Total Electricity Expance in a month
# Electricity Unit price 
# Water usage bill in a month
# Mobile & Wifi Reacharge bill
# Other Expances

# Number of Family Members you live with 

## Output
# Your Family Total Expence in a Month is ***** in a month
# After spliting total expence every person should pay ***** in a month 

a = "Calculating total expence of your family"

b = "Also calculating every family member how much should pay for monthly expence"

c = "First fill the following aspects ⬇️ ⬇️"

print(a)

print(b)

print(c)

# Getting all data from user
rent = int(input("Total Rent of House/Flat : "))

grocery = int(input("Total Grocery Expence in a Month: "))

Electricity = int(input("Total Electricity (unit) spend in a month : "))

unit_price = int(input("Unit Price in Your Area: "))

water = int(input("Total Spending for Water supply : "))

reacharge = int(input("Mobile & wifi Reacharge Bill : "))

other = int(input("Other Expences : "))

total_electricity_bill = Electricity * unit_price

total_expence = (rent + grocery + total_electricity_bill + water + reacharge + other)

print(f"Your Family's Total Expence in a Month is {total_expence} Rs.")

members = int(input("How many family members are you live with : "))

output = (total_expence // members)

print(f"Every Person Should Contribute Approx {output} Rs. Equally for Monthly Expence")
