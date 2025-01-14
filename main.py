from openai_client import get_chat_completion

def generate_learning_module(current_module_number, previous_knowledge):
    # Prompt to generate the next cybersecurity learning module
    prompt = f"""
    I am a cybersecurity beginner who knows {', '.join(previous_knowledge)}.
    Provide the next topic I should be learning in the following structured format:
    
    {{
        "module_number": "{current_module_number + 1}",
        "title": "specific topic name",
        "difficulty": "beginner",
        "prerequisites": ["list of required prior knowledge"],
        "estimated_duration": "time in hours",
        "learning_objectives": ["specific skills learned"],
        "subtopics": [
            {{
                "name": "subtopic name",
                "description": "detailed explanation",
                "practical_applications": ["real-world uses", "CTF applications"]
            }}
        ],
        "course_content": {{
            "theory": ["core concepts"],
            "hands_on_exercises": [
                {{
                    "name": "exercise name",
                    "description": "step-by-step instructions",
                    "tools_required": ["specific tools needed"],
                    "expected_outcome": "what success looks like"
                }}
            ],
            "common_pitfalls": ["typical mistakes to avoid"],
            "tips_and_tricks": ["practical insights"]
        }},
        "knowledge_check": [
            {{
                "question": "practice question",
                "answer": "detailed explanation"
            }}
        ],
        "topics_covered": ["array of specific concepts covered"],
        "next_topic": "title of the next module",
        "recommended_tools": ["specific tools to master"],
        "additional_resources": ["useful links", "tools", "practice platforms"]
    }}
    """
    
    # Call the OpenAI client with the generated prompt
    messages = [{"role": "user", "content": prompt}]
    response = get_chat_completion(messages)
    return response

if __name__ == "__main__":
    # Example usage
    current_module = 1
    prior_knowledge = ["SQL Injection", "JWT Tokens", "Cookies"]
    
    # Generate the next learning module
    response = generate_learning_module(current_module, prior_knowledge)
    
    # Print the structured response
    print(response)