import React from "react";
import { Typography, Space, Collapse, Image } from "antd";
import { itemsFe, itemsUi, buttonInfo } from "./Data";

const { Text, Title } = Typography;

export default function Home() {
	const onChange = (key) => {
		console.log(key);
	};
	return (
		<div>
			<div className="home">
				<Space>
					<Image width={120} src={require("../images/fotoku.png")} />
				</Space>
				<div style={{ marginLeft: 15 }}>
					<Title level={2}>It's me, Muhammad Labib &#128521;</Title>
					<Text style={{ fontSize: 18 }}>Front-End Web Developer</Text>
				</div>
			</div>
			<div className="contact">
				{buttonInfo.map((value, key) => (
					<a href={value.link} target="_blank">
						{value.button}
					</a>
				))}
			</div>

			<div className="content">
				<div className="contentPart1">
					<p style={{ marginBottom: 5 }}>My Project - Front End</p>
					<Collapse
						className="collapse"
						items={itemsFe}
						onChange={onChange}
						accordion
					/>
				</div>
				<div className="contentPart1">
					<p style={{ marginBottom: 5 }}>My Project - UI Design</p>
					<Collapse
						className="collapse"
						items={itemsUi}
						onChange={onChange}
						accordion
					/>
				</div>
			</div>
		</div>
	);
}
