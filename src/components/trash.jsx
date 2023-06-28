import React from "react";
import { Button, Typography, Space, Collapse } from "antd";
import {
	GithubOutlined,
	LinkedinFilled,
	FacebookFilled,
	GoogleOutlined,
} from "@ant-design/icons";

const { Text, Title } = Typography;

const items = {
	fontSize: 50,
	color: {
		github: "#171515",
		linkedin: "#0077B5",
		facebook: "#3b5998 ",
		mail: "#ea4335 ",
	},
};

const text = "contoh teks";
const itemsCollapse = [
	{
		key: "1",
		label: "ini adalah header collapse",
		children: <p>{text}</p>,
	},
	{
		key: "2",
		label: "ini adalah header collapse",
		children: <p>{text}</p>,
	},
	{
		key: "3",
		label: "ini adalah header collapse",
		children: <p>{text}</p>,
	},
];

export default function Home() {
	const onChange = (key) => {
		console.log(key);
	};
	return (
		<div className="container">
			<div className="home">
				<Title>It's me, Muhammad Labib &#128521;</Title>
				<Text style={{ fontSize: 24 }}>Front End Web Developer</Text>
			</div>
			<div className="contact">
				<GithubOutlined
					style={{ fontSize: items.fontSize, color: items.color.github }}
				/>
				<LinkedinFilled
					style={{ fontSize: items.fontSize, color: items.color.linkedin }}
				/>
				<FacebookFilled
					style={{ fontSize: items.fontSize, color: items.color.facebook }}
				/>
				<GoogleOutlined
					style={{ fontSize: items.fontSize, color: items.color.mail }}
				/>
			</div>

			<div className="content">
				<Text style={{ fontSize: 24, textAlign: "center" }}>My Project</Text>
				<div className="contentPart">
					<div className="contentPart1">
						<p>Front End</p>
						<Space
							direction="vertical"
							style={{
								width: "100%",
							}}>
							<Button type="primary" block size="large">
								WEB JOB SEEKER
							</Button>

							<Button type="primary" block size="large">
								EVENT CALENDAR
							</Button>

							<Button type="primary" block size="large">
								WEB ENGLISH COURSE
							</Button>
						</Space>
					</div>
					<div className="contentPart1">
						<p>UI Design</p>
						<Space
							direction="vertical"
							style={{
								width: "100%",
							}}>
							<Button type="primary" block size="large">
								<a href="https://bit.ly/43DFFVY" target="_blank">
									WEB CROWDE P2P LENDING
								</a>
							</Button>

							<Button type="primary" block size="large">
								<a href="https://bit.ly/3J9xzMk" target="_blank">
									WEB PARIWISATA BANTEN
								</a>
							</Button>
						</Space>
					</div>
				</div>
			</div>

			<Collapse
				items={itemsCollapse}
				defaultActiveKey={["1"]}
				onChange={onChange}
			/>
		</div>
	);
}
