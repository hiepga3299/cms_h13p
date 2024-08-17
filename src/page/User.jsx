import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const User = () => {
  const handleStatus = (e) => {
    // console.log(e);
  };
  return (
    <div className="w-9/12 mt-3 mb-3">
      <Card className="border-none rounded-none shadow-none mb-5">
        <CardHeader className="p-0">
          <CardTitle>Danh sách thành viên</CardTitle>
          <CardDescription className="text-xs text-red-500">
            Card Description
          </CardDescription>
        </CardHeader>
      </Card>

      <Table className="border border-solid border-[#ebebeb] bg-gray-50">
        <TableCaption>Danh sách thành viên</TableCaption>
        <TableHeader className="bg-white">
          <TableRow className="hover:bg-white">
            <TableHead className="w-[50px]">
              <Checkbox className="bg-white" />
            </TableHead>
            <TableHead>STT</TableHead>
            <TableHead>Tên đăng nhập</TableHead>
            <TableHead>Họ và tên</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Số điện thoại</TableHead>
            <TableHead>Địa chỉ</TableHead>
            <TableHead>Nhóm thành viên</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead className="text-center">Hành động</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              <Checkbox />
            </TableCell>
            <TableCell>1</TableCell>
            <TableCell>admin</TableCell>
            <TableCell>Nguyễn Minh Hiệp</TableCell>
            <TableCell>admin@gmail.com</TableCell>
            <TableCell>0372479434</TableCell>
            <TableCell>Hoàng Mai, Hà Nội</TableCell>
            <TableCell>Administrator</TableCell>
            <TableCell>
              <Switch onClick={handleStatus} />
            </TableCell>
            <TableCell className="text-right space-x-1">
              <Button variant="outline" className="bg-cyan-400">
                Xem
              </Button>
              <Button variant="outline" className="bg-amber-200">
                Sửa
              </Button>
              <Button variant="outline" className="bg-red-500">
                Xóa
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
export default User;
