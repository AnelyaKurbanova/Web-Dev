def xyz_there(string):
    for i in range(len(string) - 2):
        if string[i:i+3] == 'xyz':
            if i == 0 or string[i-1] != '.':
                return True
    return False