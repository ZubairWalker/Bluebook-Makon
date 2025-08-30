 // Timer functionality
        let timeLeft = 32 * 60; // 32 minutes in seconds
        const timerElement = document.getElementById('timer');
        
        function updateTimer() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                alert('Time is up!');
                return;
            }
            timeLeft--;
        }
        
        const timerInterval = setInterval(updateTimer, 1000);

        // Questions data
        const questions = [
            {
                question: "According to the passage, what was the initial expectation about creating artificial intelligence?",
                choices: [
                    "It would take centuries to achieve",
                    "It would be relatively straightforward and achievable within decades",
                    "It was impossible with available technology",
                    "It required international cooperation"
                ],
                correct: 1
            },
            {
                question: "What was the main limitation of early AI systems?",
                choices: [
                    "They were too expensive to develop",
                    "They required too much computational power",
                    "They were rule-based and lacked flexibility",
                    "They could only work with numerical data"
                ],
                correct: 2
            },
            {
                question: "What breakthrough enabled AI systems to become more flexible?",
                choices: [
                    "Faster computer processors",
                    "Machine learning algorithms and neural networks",
                    "Better programming languages",
                    "Increased funding for research"
                ],
                correct: 1
            },
            {
                question: "Which of the following tasks can modern AI systems perform?",
                choices: [
                    "Only mathematical calculations",
                    "Face recognition, language translation, and art creation",
                    "Only data storage and retrieval",
                    "Only simple repetitive tasks"
                ],
                correct: 1
            },
            {
                question: "What distinguishes human intelligence from current AI systems?",
                choices: [
                    "Humans are faster at processing information",
                    "Humans can transfer knowledge across different domains",
                    "Humans require less energy to think",
                    "Humans can work without rest"
                ],
                correct: 1
            },
            {
                question: "What concerns are mentioned about the future of AI?",
                choices: [
                    "Only technical limitations",
                    "Ethics, job displacement, and risks of superintelligent systems",
                    "Only cost considerations",
                    "Only environmental impact"
                ],
                correct: 1
            },
            {
                question: "How are today's AI systems best described?",
                choices: [
                    "General problem-solvers",
                    "Narrow specialists",
                    "Perfect replicas of human intelligence",
                    "Completely unreliable"
                ],
                correct: 1
            },
            {
                question: "When was the concept of artificial intelligence first introduced?",
                choices: [
                    "1940s",
                    "1950s",
                    "1960s",
                    "1970s"
                ],
                correct: 1
            },
            {
                question: "What type of learning do neural networks use?",
                choices: [
                    "Rule-based programming",
                    "Pattern recognition from data",
                    "Memory-based storage",
                    "Random trial and error"
                ],
                correct: 1
            },
            {
                question: "What is artificial general intelligence?",
                choices: [
                    "AI that works only in specific domains",
                    "AI that can transfer knowledge across different areas like humans",
                    "AI that is faster than human thinking",
                    "AI that requires no programming"
                ],
                correct: 1
            },
            {
                question: "According to the passage, what makes human learning unique?",
                choices: [
                    "Humans learn faster than machines",
                    "Humans can apply learning from one area to solve problems in different fields",
                    "Humans never forget what they learn",
                    "Humans don't need examples to learn"
                ],
                correct: 1
            },
            {
                question: "What was discovered as scientists studied human cognition more deeply?",
                choices: [
                    "Human intelligence was simpler than expected",
                    "Replicating intelligence artificially was more challenging than anticipated",
                    "Computers were already smarter than humans",
                    "Human intelligence could be easily programmed"
                ],
                correct: 1
            },
            {
                question: "What characterizes the flexibility of human intelligence?",
                choices: [
                    "Speed of processing",
                    "Adaptability and knowledge transfer",
                    "Memory capacity",
                    "Computational accuracy"
                ],
                correct: 1
            },
            {
                question: "What field is NOT mentioned as an area where AI demonstrates remarkable capabilities?",
                choices: [
                    "Natural language processing",
                    "Computer vision",
                    "Quantum physics research",
                    "Art creation"
                ],
                correct: 2
            },
            {
                question: "What is the main challenge facing society regarding AI development?",
                choices: [
                    "Lack of computational resources",
                    "Balancing benefits while mitigating risks",
                    "Insufficient research funding",
                    "Limited programming talent"
                ],
                correct: 1
            },
            {
                question: "How do current AI systems differ from human problem-solving?",
                choices: [
                    "AI systems are always more accurate",
                    "AI systems cannot easily transfer knowledge to new domains",
                    "AI systems work slower than humans",
                    "AI systems require constant supervision"
                ],
                correct: 1
            },
            {
                question: "What does the passage suggest about setting expectations for AI?",
                choices: [
                    "Expectations should be unlimited",
                    "Understanding current limitations is crucial for realistic expectations",
                    "AI will solve all problems soon",
                    "Expectations don't matter for development"
                ],
                correct: 1
            },
            {
                question: "What type of intelligence do humans possess that current AI lacks?",
                choices: [
                    "Emotional intelligence only",
                    "General intelligence with cross-domain knowledge transfer",
                    "Mathematical intelligence only",
                    "Social intelligence only"
                ],
                correct: 1
            },
            {
                question: "According to the passage, what was the original timeline expectation for achieving human-like AI?",
                choices: [
                    "A few years",
                    "A few decades",
                    "A century",
                    "It was never specified"
                ],
                correct: 1
            },
            {
                question: "What advantage do machine learning algorithms have over rule-based systems?",
                choices: [
                    "They are cheaper to develop",
                    "They can learn patterns from data rather than following pre-programmed rules",
                    "They use less computational power",
                    "They are easier to understand"
                ],
                correct: 1
            },
            {
                question: "What does the passage indicate about the current state of AI research?",
                choices: [
                    "It has reached its peak",
                    "It continues to advance rapidly",
                    "It has stagnated",
                    "It is declining in importance"
                ],
                correct: 1
            },
            {
                question: "What is mentioned as a key difference between early and modern AI systems?",
                choices: [
                    "Modern systems are smaller",
                    "Modern systems can learn from data instead of just following rules",
                    "Modern systems are less expensive",
                    "Modern systems require less maintenance"
                ],
                correct: 1
            },
            {
                question: "What does the passage suggest about the debate surrounding AI?",
                choices: [
                    "It has been resolved",
                    "It only concerns technical aspects",
                    "Questions about ethics and risks remain hotly debated",
                    "It is not important for society"
                ],
                correct: 2
            },
            {
                question: "How does the passage characterize the evolution of AI?",
                choices: [
                    "Steady and predictable",
                    "Dramatic since the 1950s",
                    "Slow and insignificant",
                    "Recently started"
                ],
                correct: 1
            },
            {
                question: "What is the main focus of the final paragraph?",
                choices: [
                    "Future technological developments",
                    "The importance of understanding AI's current limitations",
                    "Historical achievements in AI",
                    "Funding requirements for AI research"
                ],
                correct: 1
            },
            {
                question: "According to the passage, what represents the next major milestone in AI development?",
                choices: [
                    "Faster processing speeds",
                    "Artificial general intelligence",
                    "Better user interfaces",
                    "Lower development costs"
                ],
                correct: 1
            },
            {
                question: "What does the passage suggest about the relationship between AI capabilities and human expectations?",
                choices: [
                    "Expectations should always exceed capabilities",
                    "Capabilities have exceeded all expectations",
                    "Understanding limitations helps set realistic expectations",
                    "Expectations are irrelevant to development"
                ],
                correct: 2
            }
        ];

        let currentQuestionIndex = 0;
        let selectedAnswers = new Array(questions.length).fill(null);

        function displayQuestion() {
            const question = questions[currentQuestionIndex];
            const container = document.getElementById('question-container');
            
            container.innerHTML = `
                <h3 class="text-lg font-semibold mb-4">${question.question}</h3>
                <div class="space-y-3">
                    ${question.choices.map((choice, index) => `
                        <button class="choice-btn w-full text-left p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors" 
                                data-choice="${index}">
                            ${String.fromCharCode(65 + index)}. ${choice}
                        </button>
                    `).join('')}
                </div>
            `;

            // Add click handlers to choice buttons
            const choiceButtons = container.querySelectorAll('.choice-btn');
            choiceButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remove selection from all buttons
                    choiceButtons.forEach(b => b.classList.remove('selected-choice'));
                    // Add selection to clicked button
                    this.classList.add('selected-choice');
                    
                    // Store the selected answer
                    selectedAnswers[currentQuestionIndex] = parseInt(this.dataset.choice);
                    
                    // Enable next button
                    document.getElementById('next-btn').disabled = false;
                });
            });

            // Restore previous selection if exists
            if (selectedAnswers[currentQuestionIndex] !== null) {
                choiceButtons[selectedAnswers[currentQuestionIndex]].classList.add('selected-choice');
                document.getElementById('next-btn').disabled = false;
            } else {
                document.getElementById('next-btn').disabled = true;
            }


            
            // Update navigation buttons
            document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
            
            if (currentQuestionIndex === questions.length - 1) {
                document.getElementById('next-btn').textContent = 'Finish';
            } else {
                document.getElementById('next-btn').textContent = 'Next';
            }
        }

        // Navigation event listeners
        document.getElementById('next-btn').addEventListener('click', function() {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                displayQuestion();
            } else {
                // Finish the test
                alert('Test completed! Thank you for your responses.');
            }
        });

        document.getElementById('prev-btn').addEventListener('click', function() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                displayQuestion();
            }
        });

        // Initialize
        displayQuestion();
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'97731c837277ef95',t:'MTc1NjU0NDU2OS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();