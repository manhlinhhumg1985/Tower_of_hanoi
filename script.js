//lay khoang cach giua 2 coc
let get_distance = (dis1, dis2) => {
    if ((dis1 === "TowerA" && dis2 === "TowerB") || (dis1 === "TowerB" && dis2 === "TowerC")) {
        return 400;
    }
    else if ((dis1 === "TowerB" && dis2 === "TowerA") || (dis1 === "TowerC" && dis2 === "TowerB"))
        return -400;
    else if ((dis1 === "TowerA" && dis2 === "TowerC")) {
        return 800;
    }
    else return -800;
}
//lay tong so dia hay chieu cua cac dia
let get_height = (tower) => {
    for (let i = 1; i <= 3; i++) {
        if (tower1.name === tower) {
            return tower1.disks.length;
        }
        else if (tower2.name === tower) {
            return tower2.disks.length;
        }
        else return tower3.disks.length;
    }
};
//lay ten coc
let get_name = (tower) => {
    if (tower1.name === tower) {
        return tower1.disks;
    }
    else if (tower2.name === tower) {
        return tower2.disks;
    }
    else return tower3.disks;

}
//cap nhap lai so dia trong tung coc
let update_disk = (name, t1, t2) => {
    let temp1 = get_name(t1);
    let temp2 = get_name(t2);
    temp1.shift();
    temp2.unshift(name);
}
//lay toa do cua disk duoc chon
let get_x = (name) => {
    for (let i = 0; i < disk_obj.length; i++) {
        if (name === disk_obj[i].name_disk) {
            return disk_obj[i].x_;
        }
    }
}
let get_y = (name) => {
    for (let i = 0; i < disk_obj.length; i++) {
        if (name === disk_obj[i].name_disk) {
            return disk_obj[i].y_;
        }
    }
}
let get_docao = (name) => {
    for (let i = 0; i < disk_obj.length; i++) {
        if (name === disk_obj[i].name_disk) {
            return -disk_obj[i].height
        }
    }
}
//gan toa do moi sau khi chuyen dia
let set_x = (name, dis) => {
    for (let i = 0; i < disk_obj.length; i++) {
        if (name === disk_obj[i].name_disk) {
            disk_obj[i].x_ += dis;
        }
    }
}
//Hàm vẽ đế cọc
let draw_bottom = (x1, y1, x2, y2) => {
    const line = svg
        .append("line")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("stroke-width", 10)
        .attr("stroke", "black")
}
//hàm vẽ cọc
let draw_pipe = (x1, y1, x2, y2) => {
    const line = svg
        .append("line")
        .attr("x1", x1)
        .attr("y1", y1)
        .attr("x2", x2)
        .attr("y2", y2)
        .attr("stroke-width", 10)
        .attr("stroke", "black");
}
//Hàm vẽ đĩa trên cọc ban đầu
let draw = (sum_disk) => {
    for (let i = 1; i <= sum_disk; i++) {
        let obj = {
            name_disk: '',
            x_: 0,
            y_: 0,
            height: 1
        }
        //const div = d3.select("body").append("div");
        const greenRect = svg
            .append("rect")
            .attr("width", i * 50)
            .attr("height", 50)
            .attr("x", (n - i) * 25 +100)
            .attr("y", i * 50 + 100)
            .attr("rx", 6)
            .attr("ry", 6)
            .attr("stroke-width", 3)
            .attr("stroke", "black")
            .attr("fill", "green")
            .classed("disk" + i, true)
            .classed("color", true);
        //Tao đối tượng đĩa
        obj.name_disk = "disk" + i;
        obj.x_ = 0;
        obj.y_ = i * 50;
        obj.height = i * 50+70;
        disk_obj.push(obj)
    }
//        d3.selectAll(".color").style("fill", function () {
//            return "hsl(" + Math.random() * 360 + ",100%,50%)";
//        });
}
//-----------------------
const next1 = () => {
    for (let i = 0; i < data.length; i++) {
        let x = get_distance(data[i][1], data[i][2])     //Khoang cach dich chuyen giua cac coc
        let begin_y = get_y(data[i][0])                  //lay toa do hien thoi cua dia duoc chon
        let begin_x = get_x(data[i][0]);                      //lay toa do x cua dia hien tai
        let hoz = begin_x + x;
        let height = get_docao(data[i][0])      //gan do cao cua moi dia di len khoi coc
        let count_disk = get_height(data[i][2])             //Dem so luong dia cua coc đích
        let new_y = n * 50 - (count_disk * 50) - begin_y;     // Tọa độ y của đĩa được chọn với 50 là chiều cao của mỗi đĩa
        update_disk(data[i][0], data[i][1], data[i][2])        //cap nhap lai so dia cua moi coc
        d3.selectAll('.' + data[i][0])
            .transition()
            .delay(i * 3000)
            .duration(1000)
            .attr("transform", 'translate(' + begin_x + ',' + height + ')')
            .transition()
            .attr("transform", 'translate(' + hoz + ',' + height + ')')
            .transition()
            .attr('transform', 'translate(' + hoz + ',' + new_y + ')')
        set_x(data[i][0], x)                            //cap nhat toa độ x cho đĩa
    }
}