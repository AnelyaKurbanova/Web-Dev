def close_far(a, b, c):
    if abs(a - b) <= 1:
        return abs(a - c) >= 2 and abs(b - c) >= 2
    elif abs(a - c) <= 1:
        return abs(a - b) >= 2 and abs(c - b) >= 2
    else:
        return False