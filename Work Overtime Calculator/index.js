            // Function to calculate overtime
            function calculateOvertime() {
                // Get the user input
                let hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
                let hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
                let regularHours = 40;
    
                // Check if the input values are valid
                if (isNaN(hoursWorked) || isNaN(hourlyRate) || hoursWorked <= 0 || hourlyRate <= 0) {
                    document.getElementById('result').innerHTML = "Please enter valid values for hours worked and hourly rate.";
                    return;
                }
    
                // Calculate overtime if hours worked exceed regular hours
                if (hoursWorked > regularHours) {
                    let overtimeHours = hoursWorked - regularHours;
                    let overtimeRate = hourlyRate * 1.5;
                    let overtimePay = overtimeHours * overtimeRate;
                    document.getElementById('result').innerHTML = `Overtime Pay: $${overtimePay.toFixed(2)}`;
                } else {
                    document.getElementById('result').innerHTML = "No overtime pay. You worked 40 hours or less.";
                }
            }