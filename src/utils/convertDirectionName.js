export const convertDirectionToName = direction => {
    if (direction == 'N') {
        return 'North';
    }
    else if (direction == 'S') {
        return 'South';
    }
    else if (direction == 'E') {
        return 'East';
    }
    else if (direction == 'W') {
        return 'West';
    }
    return direction;
};
