<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About - Soule | Frontend Developer</title>
    <link href="https://fonts.googleapis.com/css2?family=Irish+Grover&family=Inria+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "Inria Sans", sans-serif;
            overflow-x: hidden;
        }

        .about-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 100vh;
            background: linear-gradient(135deg, #fef7ed 0%, #fef3c7 50%, #fde68a 100%);
            position: relative;
            overflow: hidden;
            padding: 4rem;
        }

        .about-container::before {
            content: '';
            position: absolute;
            top: 5rem;
            right: 5rem;
            width: 8rem;
            height: 8rem;
            background: #fbbf24;
            border-radius: 50%;
            opacity: 0.3;
            filter: blur(2rem);
        }

        .about-container::after {
            content: '';
            position: absolute;
            bottom: 8rem;
            left: 4rem;
            width: 6rem;
            height: 6rem;
            background: #f59e0b;
            border-radius: 50%;
            opacity: 0.4;
            filter: blur(1.5rem);
        }

        .left-content {
            flex: 1;
            max-width: 32rem;
            position: relative;
        }

        .title {
            font-family: "Irish Grover", system-ui;
            font-size: 4rem;
            font-weight: bold;
            color: #374151;
            line-height: 1.1;
            margin-bottom: 2rem;
            position: relative;
        }

        .title::after {
            content: '✦';
            position: absolute;
            top: -1rem;
            right: -1rem;
            color: #fbbf24;
            font-size: 3rem;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }

        .description {
            font-family: "Inria Sans", sans-serif;
            font-size: 1.25rem;
            color: #6b7280;
            line-height: 1.6;
            margin-bottom: 3rem;
        }

        .cv-section {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
        }

        .cv-text {
            color: #374151;
            font-weight: 500;
            font-size: 1.1rem;
        }

        .download-button {
            background: #7c3aed;
            color: white;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 2rem;
            font-weight: 500;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .download-button:hover {
            background: #6d28d9;
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(124, 58, 237, 0.3);
        }

        .download-button:active {
            transform: translateY(0);
        }

        .right-content {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .decorative-shapes {
            position: relative;
            width: 20rem;
            height: 20rem;
        }

        .decorative-shapes::before,
        .decorative-shapes::after {
            content: '';
            position: absolute;
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
        }

        .decorative-shapes::before {
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #fbbf24, #f59e0b);
            opacity: 0.2;
            animation-delay: 0s;
        }

        .decorative-shapes::after {
            width: 75%;
            height: 75%;
            top: 12.5%;
            left: 12.5%;
            background: linear-gradient(135deg, #a855f7, #ec4899);
            opacity: 0.3;
            animation-delay: 1s;
        }

        @keyframes float {
            0%, 100% { 
                transform: translateY(0px) scale(1); 
            }
            50% { 
                transform: translateY(-20px) scale(1.05); 
            }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
            .about-container {
                flex-direction: column;
                text-align: center;
                gap: 3rem;
            }

            .cv-section {
                align-items: center;
            }
        }

        @media (max-width: 768px) {
            .about-container {
                padding: 2rem;
            }

            .title {
                font-size: 3rem;
            }

            .description {
                font-size: 1.1rem;
            }

            .decorative-shapes {
                width: 16rem;
                height: 16rem;
            }
        }

        @media (max-width: 480px) {
            .about-container {
                padding: 1.5rem;
            }

            .title {
                font-size: 2.5rem;
            }

            .description {
                font-size: 1rem;
            }

            .decorative-shapes {
                width: 12rem;
                height: 12rem;
            }
        }

        /* Additional interactive elements */
        .left-content {
            animation: slideInLeft 1s ease-out;
        }

        .right-content {
            animation: slideInRight 1s ease-out;
        }

        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        /* Hover effect for the entire container */
        .about-container:hover .decorative-shapes::before {
            animation-duration: 4s;
        }

        .about-container:hover .decorative-shapes::after {
            animation-duration: 4s;
        }
    </style>
</head>
<body>
    <div class="about-container">
        <div class="left-content">
            <h1 class="title">Hello ,<br />I'm Soule !</h1>
            <p class="description">
                a frontend developer with a designer's eye. I build modern, responsive websites with clean code and creative UI. From wireframes to interactive interfaces, I turn ideas into beautiful, user-friendly experiences
            </p>
            <div class="cv-section">
                <span class="cv-text">Here's My CV</span>
                <button class="download-button" onclick="downloadCV()">free download</button>
            </div>
        </div>
        
        <div class="right-content">
            <div class="decorative-shapes"></div>
        </div>
    </div>

    <script>
        function downloadCV() {
            // You can replace this with your actual CV file path
            // For now, it shows an alert - replace with actual download functionality
            
            // Option 1: Direct download (if you have a CV file in your repo)
            // const link = document.createElement('a');
            // link.href = 'path/to/your/cv.pdf';  // Replace with your CV file path
            // link.download = 'Soule_CV.pdf';
            // link.click();
            
            // Option 2: Open CV in new tab (if hosted elsewhere)
            // window.open('https://drive.google.com/your-cv-link', '_blank');
            
            // Temporary placeholder - replace with actual implementation
            alert('CV download functionality - Please add your CV file to the repository and update the downloadCV() function!');
            
            // Add some visual feedback
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = 'Downloading...';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        }

        // Add some interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            // Add mouse movement effect to decorative shapes
            const shapes = document.querySelector('.decorative-shapes');
            const container = document.querySelector('.about-container');
            
            container.addEventListener('mousemove', function(e) {
                const rect = container.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                
                const moveX = (x - 0.5) * 20;
                const moveY = (y - 0.5) * 20;
                
                shapes.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
            
            container.addEventListener('mouseleave', function() {
                shapes.style.transform = 'translate(0px, 0px)';
            });
        });
    </script>
</body>
</html>