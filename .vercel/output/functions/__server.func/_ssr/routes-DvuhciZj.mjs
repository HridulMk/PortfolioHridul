import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowUpRight, i as Download, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DvuhciZj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var profile = {
	name: "Hridul M Anilkumar",
	short: "Hridul",
	location: "Kerala, India",
	email: "hridul54@gmail.com",
	phone: "+91 8289864099",
	phoneHref: "tel:+918289864099",
	linkedin: "https://www.linkedin.com/in/hridulmk",
	github: "https://github.com/HridulMk",
	role: "AI & full-stack developer"
};
var categories = [
	"All",
	"Full-stack",
	"AI / ML",
	"Computer vision",
	"Research"
];
var projects = [
	{
		id: "oction",
		index: "01",
		title: "Oction Mart",
		kicker: "Real-time auction platform",
		categories: ["Full-stack"],
		stack: [
			"Next.js",
			"Django REST",
			"PostgreSQL",
			"JWT"
		],
		summary: "Role-based bidding and transactions for 80+ mock users. Real-time streams were tested at 100+ concurrent bids, with JWT APIs checked against 500+ records."
	},
	{
		id: "parkai",
		index: "02",
		title: "ParkAI",
		kicker: "Smart parking & space sharing",
		categories: ["Computer vision", "Full-stack"],
		stack: [
			"Flutter",
			"Django REST",
			"YOLO",
			"PostgreSQL"
		],
		summary: "Slot booking, vehicle access, and occupancy detection. YOLO recognizes vehicles and open bays; QR covers entry, exit, and 300+ payment trials."
	},
	{
		id: "dropout",
		index: "03",
		title: "Dropout risk",
		kicker: "Student intervention system",
		categories: ["AI / ML"],
		stack: [
			"Python",
			"Pandas",
			"SQL",
			"Machine learning"
		],
		summary: "A hybrid model scores dropout risk across 1,000+ profiles from attendance, academics, and fees, then drafts an intervention note for each student."
	},
	{
		id: "storefront",
		index: "04",
		title: "Storefront",
		kicker: "E-commerce application",
		categories: ["Full-stack"],
		stack: [
			"Python",
			"Authentication",
			"CRUD"
		],
		summary: "A training storefront with sign-in, product management, and full CRUD — built project-style during a Python full-stack internship in Kochi."
	},
	{
		id: "pqc",
		index: "05",
		title: "Post-quantum IoT",
		kicker: "Research paper · ICAISM, April 2025",
		categories: ["Research"],
		stack: [
			"Cryptography",
			"IoT",
			"Space communication"
		],
		summary: "Presented “Lightweight Post-Quantum Cryptography for IoT Security in Space Communication” at ICAISM, Jain University."
	}
];
var experience = [
	{
		role: "Digital Marketing Intern",
		org: "Adz4Needz",
		place: "Remote",
		dates: "Jun 2026 – Aug 2026",
		points: [
			"Coordinated task assignments and daily deliverables so the team stayed on schedule.",
			"Reviewed social performance data to spot trends and steer content decisions.",
			"Practiced team leadership, communication, and campaign analysis."
		]
	},
	{
		role: "Web Application Developer Intern",
		org: "Progressive Cybernetics Pvt. Ltd.",
		place: "Muvattupuzha, Kerala",
		dates: "Jun 2025 – Sep 2025",
		points: [
			"Designed UI and product workflows from the brief and how people actually use them.",
			"Extended features across the frontend, backend, and API.",
			"Tested 800+ mock bid records for sync and API issues, and helped raise bid-verification efficiency by about 20%."
		]
	},
	{
		role: "Python Full Stack Developer Intern",
		org: "Inmakes Infotech Pvt. Ltd.",
		place: "Kochi, Kerala",
		dates: "Jul 2023 – Oct 2023",
		points: [
			"Shipped an e-commerce app with authentication, product management, and CRUD.",
			"Worked through OpenCV exercises — practical image processing, not a slide deck.",
			"Debugged, tested, and deployed the work as part of the training."
		]
	}
];
var education = [{
	school: "Jain University, Kochi",
	credential: "Master of Computer Applications (AI & Machine Learning)",
	year: "2026",
	detail: "CGPA 8.35"
}, {
	school: "St Pius X College, Rajapuram",
	credential: "Bachelor of Science (Physics), Kannur University",
	year: "2023",
	detail: "63.08%"
}];
var skillGroups = [
	{
		label: "Programming",
		items: [
			"Python",
			"JavaScript (ES6+)",
			"SQL",
			"C",
			"Dart"
		]
	},
	{
		label: "AI & machine learning",
		items: [
			"TensorFlow",
			"Neural networks",
			"Predictive modeling",
			"Feature engineering",
			"Pandas",
			"YOLO",
			"Computer vision"
		]
	},
	{
		label: "Web & full-stack",
		items: [
			"React.js",
			"Next.js",
			"Django",
			"Flask",
			"Tailwind CSS",
			"Material UI"
		]
	},
	{
		label: "APIs & data",
		items: [
			"Django REST Framework",
			"REST",
			"PostgreSQL",
			"MySQL",
			"MongoDB"
		]
	},
	{
		label: "Cloud & systems",
		items: [
			"Docker",
			"AWS",
			"Render",
			"Linux",
			"Cisco Packet Tracer"
		]
	},
	{
		label: "Practice",
		items: [
			"Git & GitHub",
			"Postman",
			"Figma",
			"Debugging",
			"Claude, Cursor, Copilot, Grok"
		]
	}
];
var study = [
	"Exploring IoT with Cisco Packet Tracer — Cisco Networking Academy",
	"Machine Learning with Python — IBM",
	"Databases and SQL for Data Science with Python — IBM",
	"AWS Solutions Architect Associate (SAA-C03) — LinkedIn Learning",
	"RAG hands-on workshop — MongoDB, The Summit of Future 2026, JAIN"
];
var languages = [
	"English",
	"Malayalam",
	"Hindi"
];
function SectionHeading({ index, label, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs font-medium uppercase tracking-widest text-muted",
				children: [
					index,
					" — ",
					label
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 font-serif text-title text-ink",
				children: title
			}),
			lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-base leading-relaxed text-muted",
				children: lede
			}) : null
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "anchor border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "01",
				label: "About",
				title: "Physics first, then the systems around a model.",
				lede: "Hands-on with Python, React, Next.js, Django, SQL, and PostgreSQL. The work spans AI products and ordinary full-stack plumbing — auth, APIs, and the bugs in between."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-medium uppercase tracking-widest text-muted",
						children: "Education"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4",
						children: education.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-line py-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif text-2xl text-ink",
										children: item.year
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-accent",
										children: item.detail
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-ink",
									children: item.credential
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: item.school
								})
							]
						}, item.credential))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-10 text-xs font-medium uppercase tracking-widest text-muted",
						children: "Languages"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-serif text-2xl text-ink",
						children: languages.join("  ·  ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-10 text-xs font-medium uppercase tracking-widest text-muted",
						children: "Also on the desk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: study.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-t border-line pt-3 text-sm leading-relaxed text-ink",
							children: item
						}, item))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs font-medium uppercase tracking-widest text-muted",
					children: "Experience"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4",
					children: experience.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-line py-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-2xl text-ink",
									children: job.role
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: job.dates
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-accent",
								children: [
									job.org,
									" · ",
									job.place
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2",
								children: job.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm leading-relaxed text-ink",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 size-1 shrink-0 bg-accent",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
								}, point))
							})
						]
					}, job.role + job.dates))
				})] })]
			})]
		})
	});
}
var schema = object({
	name: string().trim().min(2, { error: "Please enter your name." }),
	email: string().trim().email({ error: "Enter a valid email." }),
	topic: string().trim().min(2, { error: "Add a short subject." }),
	message: string().trim().min(12, { error: "Write at least a short note." })
});
function mailtoHref(data) {
	const subject = `Portfolio — ${data.topic}`;
	const body = `${data.message}\n\n— ${data.name}\n${data.email}`;
	return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
function Contact() {
	const [errors, setErrors] = (0, import_react.useState)({});
	const [ready, setReady] = (0, import_react.useState)(null);
	function onSubmit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		const raw = new FormData(form);
		const data = {
			name: String(raw.get("name") ?? ""),
			email: String(raw.get("email") ?? ""),
			topic: String(raw.get("topic") ?? ""),
			message: String(raw.get("message") ?? "")
		};
		const parsed = schema.safeParse(data);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (typeof key === "string" && !(key in next)) next[key] = issue.message;
			}
			setErrors(next);
			setReady(null);
			return;
		}
		const href = mailtoHref(parsed.data);
		setErrors({});
		setReady({
			href,
			topic: parsed.data.topic
		});
		window.location.href = href;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "anchor border-t border-line bg-paper-deep",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "05",
				label: "Contact",
				title: "Write a note.",
				lede: "The form opens your email app with the message addressed to me. Nothing is stored on this page."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-10 space-y-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "rule-link text-ink",
							href: `mailto:${profile.email}`,
							children: profile.email
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: "Phone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "rule-link text-ink",
							href: profile.phoneHref,
							children: profile.phone
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs uppercase tracking-widest text-muted",
						children: "Location"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 text-ink",
						children: profile.location
					})] })
				]
			})] }), ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "status",
				className: "border border-line bg-paper p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-widest text-accent",
						children: "Ready to send"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-serif text-3xl text-ink",
						children: "Your note is addressed."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: [
							"Subject: ",
							ready.topic,
							". If a mail app did not open, use the link — it goes to",
							" ",
							profile.email,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: ready.href,
							className: "press inline-flex h-12 items-center justify-center bg-ink px-5 text-sm text-paper hover:bg-accent",
							children: "Open mail app"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "press inline-flex h-12 items-center justify-center border border-ink px-5 text-sm text-ink",
							onClick: () => setReady(null),
							children: "Edit note"
						})]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				noValidate: true,
				className: "border border-line bg-paper p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							name: "name",
							error: errors.name,
							autoComplete: "name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							name: "email",
							type: "email",
							error: errors.email,
							autoComplete: "email"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Subject",
							name: "topic",
							error: errors.topic
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block",
							htmlFor: "message",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium uppercase tracking-widest text-muted",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "message",
								name: "message",
								rows: 5,
								required: true,
								"aria-invalid": errors.message ? true : void 0,
								"aria-describedby": errors.message ? "message-error" : void 0,
								className: "mt-2 w-full resize-y border-b border-line bg-transparent py-3 text-base text-ink outline-none focus:border-accent"
							})]
						}), errors.message ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: "message-error",
							className: "mt-2 text-sm text-accent",
							children: errors.message
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "press mt-8 inline-flex h-12 items-center justify-center bg-ink px-5 text-sm text-paper hover:bg-accent",
						children: "Send message"
					})
				]
			})]
		})
	});
}
function Field({ label, name, error, type = "text", autoComplete }) {
	const errorId = `${name}-error`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		htmlFor: name,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-medium uppercase tracking-widest text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: name,
			name,
			type,
			autoComplete,
			required: true,
			"aria-invalid": error ? true : void 0,
			"aria-describedby": error ? errorId : void 0,
			className: "mt-2 w-full border-b border-line bg-transparent py-3 text-base text-ink outline-none focus:border-accent"
		})]
	}), error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		id: errorId,
		className: "mt-2 text-sm text-accent",
		children: error
	}) : null] });
}
var contents = [
	{
		label: "Profile & skills",
		detail: "Python, React, Next.js, Django, machine learning"
	},
	{
		label: "Experience",
		detail: "Adz4Needz, Progressive Cybernetics, Inmakes Infotech"
	},
	{
		label: "Projects",
		detail: "Oction Mart, ParkAI, dropout risk, storefront"
	},
	{
		label: "Education & research",
		detail: "MCA 8.35 · ICAISM paper, April 2025"
	}
];
var href = "/Hridul-M-Anilkumar-CV.pdf";
function Cv() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cv",
		className: "anchor border-t border-line bg-paper-deep",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "04",
				label: "CV",
				title: "The same record, as a PDF.",
				lede: "Two pages: profile, skills, internships, projects, education, and the ICAISM paper. It is the file behind this site."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-line bg-paper p-6 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4 border-b border-line pb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-widest text-muted",
								children: "File"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-serif text-2xl text-ink",
								children: "Hridul M Anilkumar"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: "PDF · 2 pages · 128 KB"
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-4xl leading-none text-ink/20",
							"aria-hidden": "true",
							children: "CV"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-2",
						children: contents.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4 border-b border-line py-3 last:border-b-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "w-6 shrink-0 text-sm text-accent",
								children: ["0", index + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-ink",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-sm text-muted",
								children: item.detail
							})] })]
						}, item.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href,
							download: "Hridul-M-Anilkumar-CV.pdf",
							className: "press inline-flex h-12 items-center justify-center gap-2 bg-ink px-5 text-sm text-paper hover:bg-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Download PDF"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "press inline-flex h-12 items-center justify-center border border-ink px-5 text-sm text-ink hover:bg-ink hover:text-paper",
							children: "Open in a tab"
						})]
					})
				]
			})]
		})
	});
}
var columns = [{
	title: "Visit",
	links: [
		{
			label: "About",
			href: "#about"
		},
		{
			label: "Work",
			href: "#work"
		},
		{
			label: "Skills",
			href: "#skills"
		},
		{
			label: "CV",
			href: "#cv"
		},
		{
			label: "Contact",
			href: "#contact"
		}
	]
}, {
	title: "Elsewhere",
	links: [
		{
			label: "GitHub",
			href: profile.github,
			external: true
		},
		{
			label: "LinkedIn",
			href: profile.linkedin,
			external: true
		},
		{
			label: "Email",
			href: `mailto:${profile.email}`
		},
		{
			label: "Phone",
			href: profile.phoneHref
		}
	]
}];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-serif text-4xl leading-none md:text-5xl",
					children: ["Hridul", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic",
						children: " Anilkumar"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-sm text-sm leading-relaxed text-line",
					children: [
						"Full-stack software and machine learning, from Kerala. ",
						languages.join(" · "),
						"."
					]
				})] }), columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": column.title,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-widest text-line",
						children: column.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: column.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: link.href,
							className: "rule-link inline-flex h-11 items-center gap-1 text-sm text-paper",
							..."external" in link && link.external ? {
								target: "_blank",
								rel: "noopener noreferrer"
							} : {},
							children: [link.label, "external" in link && link.external ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-4",
								"aria-hidden": "true"
							}) : null]
						}) }, link.label))
					})]
				}, column.title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col gap-3 border-t border-paper/20 pt-6 text-sm text-line sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					profile.name
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "rule-link inline-flex h-11 items-center text-paper",
					children: "Back to top"
				})]
			})]
		})
	});
}
var links = [
	{
		href: "#about",
		id: "about",
		label: "About"
	},
	{
		href: "#work",
		id: "work",
		label: "Work"
	},
	{
		href: "#skills",
		id: "skills",
		label: "Skills"
	},
	{
		href: "#cv",
		id: "cv",
		label: "CV"
	},
	{
		href: "#contact",
		id: "contact",
		label: "Contact"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const nodes = links.map((link) => document.getElementById(link.id)).filter((node) => node !== null);
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-45% 0px -45% 0px",
			threshold: [
				0,
				.25,
				.6
			]
		});
		nodes.forEach((node) => observer.observe(node));
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 bg-accent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "font-serif text-xl leading-none text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "md:hidden",
							children: profile.short
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden md:inline",
							children: profile.name
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-1 md:flex",
						"aria-label": "Sections",
						children: [links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							"aria-current": active === link.id ? "true" : void 0,
							className: `inline-flex h-11 items-center px-3 text-sm ${active === link.id ? "text-ink" : "text-muted hover:text-ink"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: active === link.id ? "border-b border-accent pb-0.5" : "",
								children: link.label
							})
						}, link.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "press ml-2 inline-flex h-11 items-center bg-ink px-4 text-sm text-paper hover:bg-accent",
							children: "Write"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "press relative grid size-11 place-items-center border border-line text-ink md:hidden",
						"aria-expanded": open,
						"aria-controls": "mobile-nav",
						onClick: () => setOpen((value) => !value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: open ? "Close menu" : "Open menu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								className: `icon-swap size-5 ${open ? "icon-off" : "icon-on"}`,
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: `icon-swap absolute size-5 ${open ? "icon-on" : "icon-off"}`,
								"aria-hidden": "true"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "mobile-nav",
				className: `drawer md:hidden ${open ? "open" : ""}`,
				inert: open ? void 0 : true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "drawer-inner",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-col border-t border-line px-5 py-2",
						"aria-label": "Sections",
						children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							className: "inline-flex h-12 items-center border-b border-line text-base text-ink last:border-b-0",
							onClick: () => setOpen(false),
							children: link.label
						}, link.id))
					})
				})
			})
		]
	});
}
var facts = [
	{
		label: "Study",
		value: "MCA · AI & ML"
	},
	{
		label: "CGPA",
		value: "8.35"
	},
	{
		label: "Base",
		value: "Kerala"
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "anchor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 text-xs font-medium uppercase tracking-widest text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Folio 01 — Portfolio" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: profile.location })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-8 font-serif text-display text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block",
						children: "Hridul"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block italic",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "not-italic text-accent",
							children: "M "
						}), "Anilkumar"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-lg leading-relaxed text-ink",
						children: "MCA graduate in artificial intelligence and machine learning. I build full-stack products in Python, React, Next.js, and Django — and I stay with a problem until the data and the interface agree."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm leading-relaxed text-muted md:text-right",
						children: ["Open to roles in full-stack development and machine learning.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-ink",
							children: profile.role
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-10 grid grid-cols-3 border-y border-line",
					children: facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-3 py-4 first:pl-0 last:pr-0 md:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs uppercase tracking-widest text-muted",
							children: fact.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 font-serif text-lg text-ink md:text-2xl",
							children: fact.value
						})]
					}, fact.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#work",
							className: "press inline-flex h-12 items-center justify-center bg-ink px-5 text-sm text-paper hover:bg-accent",
							children: "See the work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${profile.email}`,
							className: "press inline-flex h-12 items-center justify-center border border-ink px-5 text-sm text-ink hover:bg-ink hover:text-paper",
							children: "Email Hridul"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: profile.github,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "rule-link inline-flex h-12 items-center gap-1 text-sm text-ink",
							children: ["GitHub", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-4",
								"aria-hidden": "true"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: profile.linkedin,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "rule-link inline-flex h-12 items-center gap-1 text-sm text-ink",
							children: ["LinkedIn", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-4",
								"aria-hidden": "true"
							})]
						})
					]
				})
			]
		})
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "anchor border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "03",
				label: "Skills",
				title: "Tools I actually ship with.",
				lede: "A working set, not a keyword cloud — from model training through the API and the screen in front of it."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3",
				children: skillGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "border-t border-line pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-medium uppercase tracking-widest text-muted",
						children: group.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1.5",
						children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-base text-ink",
							children: item
						}, item))
					})]
				}, group.label))
			})]
		})
	});
}
function Work() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const visible = (0, import_react.useMemo)(() => filter === "All" ? projects : projects.filter((project) => project.categories.includes(filter)), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "anchor border-t border-line bg-paper-deep",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-8 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						index: "02",
						label: "Work",
						title: "Selected projects",
						lede: "Auctions, parking vision, student risk, a storefront, and a research paper. Hover a card — or focus it — to read the note."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							"Showing ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-ink",
								children: visible.length
							}),
							" of ",
							projects.length
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					role: "group",
					"aria-label": "Filter projects",
					children: categories.map((category) => {
						const count = category === "All" ? projects.length : projects.filter((project) => project.categories.includes(category)).length;
						const selected = filter === category;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": selected,
							onClick: () => setFilter(category),
							className: `press inline-flex h-11 items-center gap-2 border px-4 text-sm ${selected ? "border-ink bg-ink text-paper" : "border-line bg-paper text-ink hover:border-ink"}`,
							children: [category, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: selected ? "text-paper/70" : "text-muted",
								children: count
							})]
						}, category);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "shelf-enter mt-8 grid gap-4 md:grid-cols-2",
					children: visible.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						tabIndex: 0,
						className: "project-card h-full outline-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif text-5xl leading-none text-ink/20",
										children: project.index
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "max-w-40 text-right text-xs font-medium uppercase tracking-widest text-muted",
										children: project.categories.join(" · ")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-serif text-4xl leading-none text-ink",
									children: project.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: project.kicker
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-ink",
								children: project.stack.join(" · ")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "project-reveal",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "reveal-kicker",
									children: "Note"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "project-summary mt-3 text-sm leading-relaxed",
									children: project.summary
								})]
							})
						]
					}) }, project.id))
				}, filter)
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#content",
			className: "skip",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cv, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Home as component };
