<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Confirmation - Rritam Peace Valley</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }

        .container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
        }

        .highlight {
            color: #d35400;
            font-weight: bold;
        }

        hr {
            border: none;
            border-top: 1px solid #ccc;
            margin: 20px 0;
        }
    </style>
</head>

<body>
    <div class="container">
        <p>Dear <strong>{{ $registration->applicant_name }}</strong>,</p>

        <p><strong>Congratulations!</strong></p>

        <p>
            We are pleased to confirm the receipt of your registration amount of
            <span class="highlight">₹ 31000/-</span>
            with application no. DDJAY - 22<strong>{{ $registration->id }}</strong>
            for the <strong>RRITAM PEACE VALLEY</strong> residential project, located at
            <strong>Sector 80, Sonipat, Haryana</strong>
            (HERERA Registration No.: <strong>PKL-SNP-741-2025</strong>).
            For the plot measuring <strong>{{ $registration->size }} square yards</strong>
            under the <strong>{{ $registration->quota }}</strong> Quota.
        </p>

        <p>
            The Deen Dayal Jan Awas Yojna (DDJAY) is a strategic initiative introduced under the Affordable Housing Policy, 2016, with the objective of promoting affordable plotted development in low and medium potential towns across the state. The scheme is aimed at creating high-density residential colonies, integrated with essential infrastructure and public utilities, ensuring a well-planned urban living environment.
        </p>

        <hr>

        <p><strong>For any assistance or further information, please feel free to contact your designated Relationship Manager:
            </strong></p>
        <p>
            Name: <strong>{{ $rm['name'] }}</strong><br>
            Contact Number: <strong>{{ $rm['phone'] ?: 'Not Available' }}</strong>
        </p>

        <hr>

        <p>
            <strong>Note:</strong> “In the event that you choose not to proceed for any reason,
            your registration amount will be fully refundable back to the source within 15 working days,
            in accordance with our refund policy."
        </p>

        <p>We extend a warm welcome to you and look forward to serving you throughout this journey.</p>

        <p>Thank you.</p>

        <p><strong>Warm Regards,<br>Team Rritam Peace Valley </strong></p>
    </div>
</body>

</html>