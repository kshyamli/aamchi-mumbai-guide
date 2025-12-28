// The Aamchi Mumbai Guide - Complete Knowledge Base Integration
// AI for Bharat Week 5 Challenge

// Mumbai Local Guide Data - Comprehensive Knowledge Base from product.md
const mumbaiKnowledgeBase = {
    slang: {
        'cutting': {
            meaning: "Half a cup of strong ginger tea",
            response: "Arre bhidu, cutting matlab half cup chai! When you want just a small sip of that strong ginger tea, you ask for cutting. Perfect for those quick tea breaks, dada!"
        },
        'bhidu': {
            meaning: "Friend, brother, or dude",
            response: "Bhidu means friend, brother, or buddy! It's how we address each other here in Mumbai. Like 'Arre bhidu, kya haal hai?' Very casual and friendly way to talk, bantai!"
        },
        'bantai': {
            meaning: "Friend, brother, or dude",
            response: "Bantai is another word for friend or dude, just like bhidu! We use it all the time - 'Bantai, chalte hai!' It's pure Bambaiya lingo, dada."
        },
        'khali-pili': {
            meaning: "For no reason",
            response: "Khali-pili means for no reason at all! Like when someone creates drama khali-pili or when you're just roaming around the city without any purpose. Classic Mumbai phrase, bhidu!"
        },
        'waat lag gayi': {
            meaning: "To be in big trouble",
            response: "Waat lag gayi means you're in big trouble, dada! Like when you miss the last local train or when your boss catches you coming late. Proper Mumbai way to say you're screwed!"
        },
        'kalti': {
            meaning: "To leave or escape quietly",
            response: "Kalti means to leave or escape quietly, bantai! Like when you want to kalti from a boring meeting or sneak out from home. Very useful word in Mumbai life!"
        }
    },

    food: {
        'vada pav': {
            location: "Ashok Vada Pav (Kirti College)",
            description: "The Burger of Mumbai",
            response: "Arre bhidu, vada pav is the king of Mumbai street food! Best one is at Ashok Vada Pav near Kirti College. It's our burger, dada - crispy vada with spicy chutney in pav. Must try!"
        },
        'pav bhaji': {
            location: "Sardar Pav Bhaji at Tardeo",
            description: "Extra butter recommended",
            response: "Pav bhaji is pure Mumbai magic, bantai! Go to Sardar Pav Bhaji at Tardeo - they load it with extra butter. Eat it with your hands, that's the real Mumbai way!"
        },
        'mastani': {
            location: "Sujata Mastani",
            description: "Originally from Pune, popular in Mumbai suburbs",
            response: "Mastani is originally from Pune, but bhidu, Sujata Mastani in Mumbai suburbs is fantastic! Thick milkshake with ice cream on top - perfect for Mumbai heat, dada!"
        },
        'maska bun': {
            location: "Kyani & Co (Marine Lines)",
            description: "Classic Irani cafe experience",
            response: "Arre bhidu, try maska bun at Kyani & Co in Marine Lines! Buttered bun with chai - classic Irani cafe experience, dada!"
        },
        'bagdadi': {
            location: "Colaba",
            description: "Massive portions, very cheap",
            response: "Bagdadi in Colaba serves massive portions for cheap, bantai! Perfect when you're really hungry and want value for money!"
        }
    },

    locations: {
        'iit bombay': {
            area: "Powai",
            description: "Tech hub with Powai Lake",
            nearby: "Powai Social, Galleria Mall, local vada pav stalls",
            response: "IIT Bombay is in Powai, bhidu! Tech hub with beautiful Powai Lake. For food nearby, try Powai Social for trendy stuff or local vada pav stalls for authentic Mumbai taste, dada!"
        },
        'powai': {
            description: "Tech area, home to IIT Bombay",
            nearby: "Powai Lake, Galleria Mall",
            response: "Powai is the tech area, bantai! Home to IIT Bombay, Powai Lake, and Galleria Mall. Good food at Powai Social, and plenty of local joints for quick bites!"
        },
        'marine drive': {
            description: "Queen's Necklace - perfect for sunset",
            energy: "low",
            impact: "high",
            bestTime: "6-7 PM",
            response: "Marine Drive is our Queen's Necklace, bhidu! Perfect for sunset - just sit and watch the magic. Low energy, high impact spot. Best time is 6-7 PM, dada!"
        },
        'bandra': {
            description: "Hip area with cafes, linking road shopping",
            crowd: "young",
            response: "Bandra is the hip area, bantai! Linking Road for shopping, lots of cafes, and young crowd. Good connectivity and great food scene!"
        },
        'colaba': {
            description: "Tourist area with Gateway of India",
            attractions: "Gateway of India, Cafe Leopold, street shopping",
            response: "Colaba is tourist central, bhidu! Gateway of India, Cafe Leopold, street shopping at Causeway. Easy to walk around, dada!"
        },
        'juhu beach': {
            description: "Sunset spot, street food, celebrity homes",
            activities: "beach walk, people watching",
            response: "Juhu Beach is perfect for sunset and street food, bantai! You might spot some celebrities too. Good for beach walks and people watching!"
        },
        'andheri': {
            description: "Business district, close to airport",
            connectivity: "good",
            response: "Andheri is business district, bantai! Close to airport, good connectivity. Mix of everything - from street food to fancy restaurants!"
        }
    },

    hospitals: {
        'lilavati': {
            location: "Bandra",
            type: "Multispecialty, best in West",
            response: "Arre bhidu, Lilavati Hospital in Bandra is top-class! Multispecialty, best in West Mumbai. Load mat le, they'll take good care of you, dada!"
        },
        'hiranandani': {
            location: "Powai",
            type: "Near IIT Bombay, high-end care",
            response: "Hiranandani Hospital in Powai is excellent, bantai! Right near IIT Bombay, high-end care. Perfect if you're in that area, bhidu!"
        },
        'kem': {
            location: "Parel",
            type: "Best government facility for emergencies",
            response: "KEM Hospital in Parel is the best government facility, dada! For emergencies, this is your go-to. Don't worry, they know their stuff, bantai!"
        }
    },

    hotels: {
        'zostel': {
            location: "Andheri/Saki Naka",
            type: "Budget backpackers",
            response: "Zostel in Andheri/Saki Naka is perfect for backpackers, bhidu! Budget-friendly, good crowd. Great way to meet fellow travelers, dada!"
        },
        'taj mahal palace': {
            location: "Colaba",
            type: "Iconic Mumbai landmark luxury",
            response: "Taj Mahal Palace in Colaba is iconic Mumbai luxury, bantai! Historic landmark hotel. If you want to splurge, this is it, bhidu!"
        },
        'westin': {
            location: "Powai",
            type: "Business hotel",
            response: "The Westin in Powai is great for business, dada! Near IIT, good connectivity. Perfect if you're working in that area, bantai!"
        },
        'jw marriott': {
            location: "Sahar",
            type: "Close to airport, business travelers",
            response: "JW Marriott in Sahar is close to airport, bhidu! Business travelers love it. Good if you have early flights, dada!"
        }
    },

    cafes: {
        'prithvi cafe': {
            location: "Juhu",
            vibe: "Great vibe, open-air",
            specialty: "Irish Coffee",
            response: "Prithvi Cafe in Juhu is amazing, bhidu! Great vibe, open-air setting. Try their Irish Coffee - it's legendary, dada!"
        },
        'leopold cafe': {
            location: "Colaba",
            vibe: "Historic, busy, people-watching",
            response: "Leopold Cafe in Colaba is historic, bantai! Always busy, perfect for people-watching. Tourist spot but still authentic Mumbai, bhidu!"
        },
        'kala ghoda cafe': {
            vibe: "Quiet reading, organic food",
            response: "Kala Ghoda Cafe is perfect for quiet reading, dada! Organic food, peaceful atmosphere. Great if you want to chill, bantai!"
        },
        'powai social': {
            location: "Powai",
            vibe: "Trendy spot near IIT",
            crowd: "students and young crowd",
            response: "Powai Social is trendy spot near IIT, bhidu! Good food, nice ambiance. Perfect for students and young crowd, dada!"
        }
    },

    activities: {
        'low energy': {
            options: ["Marine Drive Sunset", "Gateway of India", "Hanging Gardens"],
            response: "For low energy but high impact, bhidu - Marine Drive sunset is perfect! Just sit and watch. Gateway of India for history, or Hanging Gardens for peaceful city views, dada!"
        },
        'medium energy': {
            options: ["Colaba Causeway Shopping", "Bandra Bandstand", "Juhu Beach"],
            response: "For medium energy, bantai - try Colaba Causeway shopping, Bandra Bandstand for sea views, or Juhu Beach for a nice walk, bhidu!"
        },
        'high energy': {
            options: ["Elephanta Caves", "Sanjay Gandhi National Park", "Crawford Market"],
            response: "High energy activities, dada - Elephanta Caves for full day trip, Sanjay Gandhi National Park for trekking, or Crawford Market for intense shopping, bantai!"
        }
    },

    translations: {
        'hello': {
            marathi: 'नमस्कार',
            pronunciation: 'Namaskar',
            casual: 'हाय (Haay)'
        },
        'how are you': {
            marathi: 'कसे आहात?',
            pronunciation: 'Kase aahat?',
            casual: 'कसा आहेस? (Kasa aahes?)'
        },
        'thank you': {
            marathi: 'धन्यवाद',
            pronunciation: 'Dhanyawad'
        },
        'excuse me': {
            marathi: 'माफ करा',
            pronunciation: 'Maaf kara'
        },
        'sorry': {
            marathi: 'माफ करा',
            pronunciation: 'Maaf kara'
        },
        'i am hungry': {
            marathi: 'मला भूक लागली आहे',
            pronunciation: 'Mala bhook lagli aahe'
        },
        'water please': {
            marathi: 'पाणी द्या',
            pronunciation: 'Paani dya'
        },
        'how much': {
            marathi: 'किती?',
            pronunciation: 'Kiti?'
        },
        'very tasty': {
            marathi: 'खूप चविष्ट',
            pronunciation: 'Khoop chavishta'
        },
        'where is': {
            marathi: 'कुठे आहे?',
            pronunciation: 'Kuthe aahe?'
        },
        'go straight': {
            marathi: 'सरळ जा',
            pronunciation: 'Saral ja'
        },
        'turn left': {
            marathi: 'डावीकडे वळा',
            pronunciation: 'Daavikade vala'
        },
        'turn right': {
            marathi: 'उजवीकडे वळा',
            pronunciation: 'Ujvikade vala'
        },
        'stop here': {
            marathi: 'इथे थांबा',
            pronunciation: 'Ithe thaamba'
        },
        'local train': {
            marathi: 'लोकल ट्रेन',
            pronunciation: 'Local train'
        },
        'auto rickshaw': {
            marathi: 'ऑटो रिक्षा',
            pronunciation: 'Auto ricksha'
        },
        'how much fare': {
            marathi: 'भाडे किती?',
            pronunciation: 'Bhaade kiti?'
        }
    }
};

// Response templates for authentic Bambaiya conversation
const responseTemplates = [
    "Arre bhidu! {response}",
    "Bantai, {response}",
    "Dada, {response}",
    "Listen bhidu, {response}",
    "Arre, {response}",
    "Bantai, let me tell you - {response}"
];

// Fallback responses in Mumbai style
const fallbackResponses = [
    "Arre bhidu, I don't know about that one! Ask me about Bambaiya slang, Mumbai food, places to visit, hospitals, cafes, or hotels. I know Aamchi Mumbai well, dada!",
    "Dada, that's not clicking for me! But I'm solid with Mumbai slang, street food, medical help, cafes, and stays. What else you want to know, bantai?",
    "Bantai, I don't have the inside scoop on that yet! Ask me about local lingo, food spots, hospitals, or where to get good coffee in Mumbai!",
    "Arre, not sure about that one, bhidu! But I can definitely help with Bambaiya slang, Mumbai food spots, medical emergencies, or finding good cafes. Kya chahiye?"
];

// Main Application Class
class AamchiMumbaiGuide {
    constructor() {
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.chatWindow = document.getElementById('chatWindow');
        this.messagesContainer = document.getElementById('messagesContainer');
        this.typingIndicator = document.getElementById('typingIndicator');
        this.welcomeSection = document.getElementById('welcomeSection');
        
        // Intent patterns for complex query parsing
        this.intentPatterns = {
            location: ['going to', 'at', 'near', 'in', 'around', 'visiting', 'from', 'i am at', "i'm at"],
            food: ['hungry', 'eat', 'food', 'restaurant', 'snack', 'meal', 'breakfast', 'lunch', 'dinner', 'khana'],
            time: ['days', 'hours', 'week', 'weekend', 'today', 'tomorrow', 'morning', 'evening', 'only', 'just'],
            energy: ['tired', 'sleepy', 'exhausted', 'energetic', 'active', 'lazy', 'quick', 'easy', 'fatigue'],
            medical: ['sick', 'emergency', 'doctor', 'hospital', 'medical', 'health', 'pain', 'fever', 'accident', 'help'],
            accommodation: ['stay', 'hotel', 'room', 'accommodation', 'sleep', 'night', 'booking'],
            cafe: ['cafe', 'coffee', 'work', 'wifi', 'study', 'laptop', 'meeting', 'quiet'],
            translation: ['translate', 'how do i say', 'how to say', 'in marathi', 'marathi translation', 'meaning']
        };
        
        this.initializeApp();
    }

    initializeApp() {
        this.setupEventListeners();
        this.setupInputValidation();
        this.focusInput();
    }

    setupEventListeners() {
        // Send button click
        this.sendButton.addEventListener('click', () => this.handleSendMessage());
        
        // Enter key in input
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleSendMessage();
            }
        });
        
        // Suggestion chips
        document.querySelectorAll('.suggestion-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const query = chip.getAttribute('data-query');
                this.messageInput.value = query;
                this.handleSendMessage();
            });
        });
    }

    setupInputValidation() {
        this.messageInput.addEventListener('input', () => {
            const hasText = this.messageInput.value.trim().length > 0;
            this.sendButton.disabled = !hasText;
        });
    }

    focusInput() {
        setTimeout(() => {
            this.messageInput.focus();
        }, 100);
    }

    async handleSendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;

        // Hide welcome section after first message
        if (this.welcomeSection) {
            this.welcomeSection.style.display = 'none';
        }

        // Add user message
        this.addUserMessage(message);
        
        // Clear input
        this.messageInput.value = '';
        this.sendButton.disabled = true;
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Process message with realistic delay
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.processMessage(message.toLowerCase());
            this.addGuideMessage(response);
            this.focusInput();
        }, 1000 + Math.random() * 1000); // 1-2 second delay
    }

    addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">👤</div>
            <div class="message-content">
                ${this.escapeHtml(message)}
            </div>
        `;
        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    addGuideMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message guide-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">👋</div>
            <div class="message-content">
                ${this.formatMessage(message)}
            </div>
        `;
        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        this.typingIndicator.style.display = 'flex';
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        this.typingIndicator.style.display = 'none';
    }

    scrollToBottom() {
        setTimeout(() => {
            this.chatWindow.scrollTop = this.chatWindow.scrollHeight;
        }, 100);
    }

    // Complex Intent Processing
    processMessage(query) {
        // Check for translation requests first
        if (this.isTranslationRequest(query)) {
            return this.handleTranslation(query);
        }

        // Extract multiple intents
        const intents = this.extractIntents(query);
        
        // Generate contextual response
        return this.generateContextualResponse(query, intents);
    }

    isTranslationRequest(query) {
        return this.intentPatterns.translation.some(pattern => query.includes(pattern));
    }

    handleTranslation(query) {
        // Extract phrase to translate
        let phraseToTranslate = '';
        
        if (query.includes('translate ')) {
            phraseToTranslate = query.split('translate ')[1]?.trim();
        } else if (query.includes('how do i say ')) {
            phraseToTranslate = query.split('how do i say ')[1]?.trim();
        } else if (query.includes('how to say ')) {
            phraseToTranslate = query.split('how to say ')[1]?.trim();
        } else if (query.includes(' in marathi')) {
            phraseToTranslate = query.replace(' in marathi', '').trim();
        }

        // Clean up the phrase
        phraseToTranslate = phraseToTranslate?.replace(/['"]/g, '').trim();

        if (!phraseToTranslate) {
            return "Arre bhidu, tell me what you want to translate! Like 'translate hello' or 'how do I say thank you', dada!";
        }

        // Find translation
        const translation = mumbaiKnowledgeBase.translations[phraseToTranslate];
        if (translation) {
            let response = `Arre bhidu! "${phraseToTranslate}" in Marathi is:\n\n`;
            response += `🔤 **Marathi:** ${translation.marathi}\n`;
            response += `🗣️ **Say it like:** ${translation.pronunciation}\n`;
            if (translation.casual) {
                response += `💬 **Casual:** ${translation.casual}\n`;
            }
            response += `\nNow you can talk like a proper Mumbaikar, dada!`;
            return response;
        }

        return `Bantai, I don't have the translation for "${phraseToTranslate}" yet! Try asking for common phrases like 'hello', 'thank you', 'where is', 'how much', or 'I am hungry', dada!`;
    }

    extractIntents(query) {
        const intents = {
            locations: [],
            categories: [],
            energy: null,
            time: null,
            emergency: false
        };

        // Extract locations
        Object.keys(mumbaiKnowledgeBase.locations).forEach(location => {
            if (query.includes(location) || query.includes(location.replace(' ', ''))) {
                intents.locations.push(location);
            }
        });

        // Check for IIT variations
        if ((query.includes('iit') || query.includes('powai')) && !intents.locations.includes('iit bombay')) {
            intents.locations.push('iit bombay');
        }

        // Extract categories
        if (this.intentPatterns.food.some(pattern => query.includes(pattern))) {
            intents.categories.push('food');
        }
        if (this.intentPatterns.medical.some(pattern => query.includes(pattern))) {
            intents.categories.push('medical');
            intents.emergency = query.includes('emergency');
        }
        if (this.intentPatterns.accommodation.some(pattern => query.includes(pattern))) {
            intents.categories.push('accommodation');
        }
        if (this.intentPatterns.cafe.some(pattern => query.includes(pattern))) {
            intents.categories.push('cafe');
        }

        // Extract energy level
        if (this.intentPatterns.energy.some(word => ['tired', 'sleepy', 'exhausted', 'lazy', 'fatigue'].includes(word) && query.includes(word))) {
            intents.energy = 'low';
        } else if (this.intentPatterns.energy.some(word => ['energetic', 'active'].includes(word) && query.includes(word))) {
            intents.energy = 'high';
        }

        // Extract time constraints
        if (query.includes('2 days') || query.includes('two days') || query.includes('only') || query.includes('just')) {
            intents.time = 'short';
        }

        return intents;
    }

    generateContextualResponse(query, intents) {
        let responses = [];

        // Handle emergency medical situations first
        if (intents.emergency || (intents.categories.includes('medical') && intents.locations.length > 0)) {
            return this.handleMedicalEmergency(intents.locations[0] || null);
        }

        // Handle location + category combinations
        if (intents.locations.length > 0 && intents.categories.length > 0) {
            const location = intents.locations[0];
            const category = intents.categories[0];
            
            if (category === 'food') {
                responses.push(this.getLocationFoodRecommendation(location));
            } else if (category === 'cafe') {
                responses.push(this.getLocationCafeRecommendation(location));
            } else if (category === 'accommodation') {
                responses.push(this.getLocationAccommodationRecommendation(location));
            } else if (category === 'medical') {
                responses.push(this.getLocationMedicalRecommendation(location));
            }
        }

        // Handle energy + time constraints
        if (intents.energy === 'low' && intents.time === 'short') {
            responses.push("Bantai, tired and only short time? Perfect! " + mumbaiKnowledgeBase.activities['low energy'].response);
        }

        // If we have contextual responses, return them
        if (responses.length > 0) {
            return responses.join(' ');
        }

        // Fall back to single intent processing
        return this.findDirectResponse(query);
    }

    handleMedicalEmergency(location) {
        if (location === 'powai' || location === 'iit bombay') {
            return "Arre bhidu, medical emergency in Powai? Load mat le! Hiranandani Hospital is right there near IIT - excellent care, they'll take good care of you, dada!";
        } else if (location === 'bandra') {
            return "Bantai, emergency in Bandra? Don't worry! Lilavati Hospital is top-class - multispecialty, best in West Mumbai. They'll sort you out, bhidu!";
        } else {
            return "Dada, medical emergency? Load mat le! KEM Hospital in Parel for government (best emergency care), Lilavati in Bandra, or Hiranandani in Powai for private. All are excellent, bantai!";
        }
    }

    getLocationFoodRecommendation(location) {
        const locationData = mumbaiKnowledgeBase.locations[location];
        if (location === 'iit bombay' || location === 'powai') {
            return "Arre bhidu, hungry at IIT Bombay? Try Powai Social for trendy food and good ambiance, or hit the local vada pav stalls for authentic Mumbai taste. Both are right there, dada!";
        } else if (location === 'colaba') {
            return "Bantai, hungry in Colaba? Leopold Cafe for the classic experience, or try Bagdadi for massive portions at cheap rates. Both are legendary, bhidu!";
        } else if (location === 'bandra') {
            return "Dada, food in Bandra? Lots of hip cafes and restaurants on Linking Road. Great food scene for young crowd, bantai!";
        }
        return locationData ? locationData.response : this.findDirectResponse('food');
    }

    getLocationCafeRecommendation(location) {
        if (location === 'iit bombay' || location === 'powai') {
            return "Bhidu, cafe near IIT? Powai Social is perfect - trendy spot with good wifi, great for students and working. Right in your area, dada!";
        } else if (location === 'colaba') {
            return "Bantai, cafe in Colaba? Leopold Cafe for historic vibes and people-watching, or Kala Ghoda Cafe if you want quiet space for reading. Both are excellent, bhidu!";
        } else if (location === 'juhu beach' || location === 'juhu') {
            return "Dada, cafe near Juhu? Prithvi Cafe is amazing - open-air setting with great Irish Coffee. Perfect beach-side cafe experience, bantai!";
        }
        return "Bhidu, for cafes - Prithvi (Juhu), Leopold (Colaba), Kala Ghoda for quiet work, or Powai Social near IIT. All have different vibes, dada!";
    }

    getLocationAccommodationRecommendation(location) {
        if (location === 'iit bombay' || location === 'powai') {
            return "Arre bhidu, staying near IIT Powai? The Westin is top-class business hotel right there. Perfect for that area, dada!";
        } else if (location === 'colaba') {
            return "Bantai, staying in Colaba? Taj Mahal Palace is the iconic Mumbai experience! Historic and luxurious, bhidu!";
        } else if (location === 'andheri') {
            return "Dada, Andheri area? Zostel for budget backpackers, or JW Marriott near airport for business. Choose your style, bantai!";
        }
        return "Bhidu, for stays - Zostel (budget), Westin Powai (business), or Taj Palace (luxury). What's your budget, dada?";
    }

    getLocationMedicalRecommendation(location) {
        if (location === 'powai' || location === 'iit bombay') {
            return mumbaiKnowledgeBase.hospitals['hiranandani'].response;
        } else if (location === 'bandra') {
            return mumbaiKnowledgeBase.hospitals['lilavati'].response;
        }
        return mumbaiKnowledgeBase.hospitals['kem'].response;
    }

    findDirectResponse(query) {
        // Check all knowledge base categories
        for (const [category, items] of Object.entries(mumbaiKnowledgeBase)) {
            if (category === 'translations') continue;
            
            for (const [key, data] of Object.entries(items)) {
                if (query.includes(key.toLowerCase()) || key.toLowerCase().includes(query)) {
                    return data.response || this.formatResponse(data);
                }
            }
        }

        // Category-based fallbacks
        if (query.includes('food') || query.includes('eat') || query.includes('hungry')) {
            return "Bhidu, I know all the best Mumbai food spots! Try asking about 'vada pav', 'pav bhaji', 'mastani', or specific areas like 'food near IIT', dada!";
        }
        
        if (query.includes('hospital') || query.includes('doctor') || query.includes('medical')) {
            return "Arre bhidu, for medical help - Lilavati (Bandra), Hiranandani (Powai), or KEM (Parel) are your best options. Load mat le, they'll take care of you, dada!";
        }
        
        if (query.includes('cafe') || query.includes('coffee')) {
            return "Dada, for cafes - Prithvi (Juhu), Leopold (Colaba), Kala Ghoda for quiet work, or Powai Social near IIT. All different vibes, bantai!";
        }
        
        if (query.includes('hotel') || query.includes('stay')) {
            return "Bantai, for stays - Zostel (budget), Westin Powai (business), or Taj Palace (luxury). What's your budget, bhidu?";
        }

        // Random fallback
        return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    }

    formatResponse(data) {
        if (typeof data === 'string') return data;
        const template = responseTemplates[Math.floor(Math.random() * responseTemplates.length)];
        return template.replace('{response}', data.response || data.description || 'Ask me more, bhidu!');
    }

    formatMessage(message) {
        // Convert markdown-style formatting to HTML
        return message
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/🔤|🗣️|💬/g, '<span style="font-size: 1.1em;">$&</span>');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AamchiMumbaiGuide();
});
