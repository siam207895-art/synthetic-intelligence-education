from sympy import Eq, symbols, solve, sympify
import re


def normalize_input(raw_text: str) -> str:
    text = raw_text.strip()
    text = text.replace("x²", "x**2").replace("²", "**2")
    text = text.replace("−", "-")
    text = text.replace("–", "-")
    text = text.replace("^", "**")
    text = text.replace("\u2212", "-")
    return text


def solve_math_expression(raw_text: str):
    cleaned = normalize_input(raw_text)

    if not cleaned:
        return {"status": "error", "message": "No input provided."}

    try:
        if "=" in cleaned:
            lhs, rhs = cleaned.split("=", 1)
            x = symbols("x")
            equation = Eq(sympify(lhs, locals={"x": x}), sympify(rhs, locals={"x": x}))
            result = solve(equation, x)
            return {
                "status": "ok",
                "type": "equation",
                "roots": [str(item) for item in result],
                "expression": cleaned,
            }

        expr = sympify(cleaned, locals={"x": symbols("x")})
        return {
            "status": "ok",
            "type": "expression",
            "value": str(expr),
            "expression": cleaned,
        }
    except Exception:
        return {
            "status": "error",
            "message": "Unable to parse expression. Try a simple equation like x**2 + 5*x + 6 = 0",
            "expression": cleaned,
        }
