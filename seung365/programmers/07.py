def solution(dirs):
    road_arr = []
    first = True
    for dist in dirs:
        if first:
            if dist == 'U': #0 1
                road_arr.append( [(0,0),(0,1)] )
            elif dist == 'D': #0 -1
                road_arr.append( [(0,0),(0,-1)] )
            elif dist == 'L': #-1 0
                road_arr.append( [(0,0),(-1,0)] )
            elif dist == 'R': #1 0 
                road_arr.append( [(0,0),(1,0)] )
            first=False
        else:
            if dist == 'U' and road_arr[-1][1][1]+1 <= 5:
                road_arr.append([road_arr[-1][1], (road_arr[-1][1][0],road_arr[-1][1][1]+1)])
            elif dist == 'D' and road_arr[-1][1][1]-1 >= -5:
                road_arr.append([road_arr[-1][1], (road_arr[-1][1][0],road_arr[-1][1][1]-1)])
            elif dist == 'L' and road_arr[-1][1][0]-1 >= -5:
                road_arr.append([road_arr[-1][1], (road_arr[-1][1][0]-1,road_arr[-1][1][1])])
            elif dist == 'R' and road_arr[-1][1][0]+1 <= 5:
                road_arr.append([road_arr[-1][1], (road_arr[-1][1][0]+1,road_arr[-1][1][1])])
    
    road_set = []
    
    for road in road_arr:
        road_set.append(tuple(sorted(road)))
    
    print(set(road_set))
    
    return len(set(road_set))
