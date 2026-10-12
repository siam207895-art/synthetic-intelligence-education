import re


def detect_topic(raw_text: str):
    text = raw_text.lower()

    if re.search(r"x\*\*2|x\^2|quadratic|equation.*x\s*\^\s*2", text):
        return "Quadratic Equations"
    if re.search(r"integrat|deriv|limit|differentiat|calculus", text):
        return "Calculus"
    if re.search(r"sin|cos|tan|triangle|angle|trigon", text):
        return "Trigonometry"
    if re.search(r"matrix|vector|determinant|linear", text):
        return "Linear Algebra"
    if re.search(r"fractions?|ratio|percentage|algebra", text):
        return "Algebra"
    return "General Mathematics"
