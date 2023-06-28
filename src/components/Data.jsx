import React from "react";
import { Button, Typography, Space } from "antd";
import {
	GithubOutlined,
	LinkedinFilled,
	FacebookFilled,
	GoogleOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

export const items = {
	fontSize: 40,
	color: {
		github: "#171515",
		linkedin: "#0077B5",
		facebook: "#3b5998 ",
		mail: "#ea4335 ",
	},
};

export const buttonInfo = [
	{
		key: "1",
		link: "https://github.com/labibofficial21",
		button: (
			<GithubOutlined
				style={{
					fontSize: items.fontSize,
					color: items.color.github,
					cursor: "pointer",
				}}
			/>
		),
	},
	{
		key: "2",
		link: "https://www.linkedin.com/in/labibmutashim/",
		button: (
			<LinkedinFilled
				style={{
					fontSize: items.fontSize,
					color: items.color.linkedin,
					cursor: "pointer",
				}}
			/>
		),
	},
	{
		key: "3",
		link: "https://mail.google.com/mail/u/0/?to=labibofficial21@gmail.com&fs=1&tf=cm",
		button: (
			<FacebookFilled
				style={{
					fontSize: items.fontSize,
					color: items.color.facebook,
					cursor: "pointer",
				}}
			/>
		),
	},
	{
		key: "4",
		link: "https://github.com/labibofficial21",
		button: (
			<GoogleOutlined
				style={{
					fontSize: items.fontSize,
					color: items.color.mail,
					cursor: "pointer",
				}}
			/>
		),
	},
];

export const dataList = {
	data_1: (
		<div>
			<Space direction="vertical">
				<Text>Project ini menggunakan Javascript dan library ReactJS</Text>
				<Button
					href="https://github.com/labibofficial21/project-job-seeker.git"
					target="_blank">
					Cek Project
				</Button>
			</Space>
		</div>
	),
	data_2: (
		<div>
			<Space direction="vertical">
				<Text>Project ini menggunakan Javascript dan library JQuery</Text>
				<Button
					href="https://github.com/labibofficial21/project-ena-calendar-front.git"
					target="_blank">
					Cek Project
				</Button>
			</Space>
		</div>
	),
	data_3: (
		<div>
			<Space direction="vertical">
				<Text>
					Project ini murni menggunakan HTML, CSS, dan Javascript. Project ini
					juga menggunakan Framework CSS Bootstrap
				</Text>
				<Button
					href="https://github.com/labibofficial21/project-english-course.git"
					target="_blank">
					Cek Project
				</Button>
			</Space>
		</div>
	),
	data_4: (
		<div>
			<Space direction="vertical">
				<Text>Project ini menggunakan aplikasi Figma</Text>
				<Button href="https://bit.ly/43DFFVY" target="_blank">
					Cek Project
				</Button>
			</Space>
		</div>
	),
	data_5: (
		<div>
			<Space direction="vertical">
				<Text>Project ini menggunakan aplikasi Figma</Text>
				<Button href="https://bit.ly/43DFFVY" target="_blank">
					Cek Project
				</Button>
			</Space>
		</div>
	),
};

export const itemsFe = [
	{
		key: "1",
		label: "Web Job Seeker",
		children: dataList.data_1,
	},
	{
		key: "2",
		label: "Event Calendar",
		children: dataList.data_2,
	},
	{
		key: "3",
		label: "Web English Course",
		children: dataList.data_3,
	},
];

export const itemsUi = [
	{
		key: "1",
		label: "Web Crowde P2P Lending",
		children: dataList.data_4,
	},
	{
		key: "2",
		label: "Web Pariwisata Banten",
		children: dataList.data_5,
	},
];
