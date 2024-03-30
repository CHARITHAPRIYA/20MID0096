
# Calculate average
avg = calculateaverage(window_numbers)

response = {
    "windowPrevState": window_numbers[:-len(fetched_numbers)],
    "windowCurrState": window_numbers[-len(fetched_numbers):],
    "numbers": fetched_numbers,
    "avg": avg
}


{
    "windowPrevState": [],
    "windowCurrstate": [3,6,9,12],
    "numbers" : [3,6,9,12,15],
    "avg": 9.00
}