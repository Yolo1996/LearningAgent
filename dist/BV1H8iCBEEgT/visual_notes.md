# 视觉观察：MiniMax M2.1 Agent 后训练

- **00:03:08 · `frames/frame_0004_00-03-08.jpg`**：SWE Scaling Pipeline。GitHub PR 筛选、Docker 环境构建、按任务类型抽取测试、LLM 一致性检查、问题增强、可执行环境与测试奖励，最终进入多脚手架拒绝采样与 RL。
- **00:15:41 · `frames/frame_0016_00-15-41.jpg`**：AppDev 的 Expert-in-the-Loop 管线。领域专家设计元问题、随机种子、rubric 与系统提示，再用多脚手架拒绝采样、RL 和 Agent-as-a-Verifier 完成训练闭环。
- **00:19:52 · `frames/frame_0020_00-19-52.jpg`**：WebExplorer。智能体先从随机种子自由探索，再通过删除、替换与模糊化线索迭代提高问题复杂度，构造长程搜索任务。
- **00:25:06 · `frames/frame_0025_00-25-06.jpg`**：Forge 架构。黑盒 Agent 只需接入预处理、运行、后处理和奖励四类接口；推理服务记录请求，数据协调器与存储汇成轨迹供 CISPO 训练。
- **00:30:20 · `frames/frame_0030_00-30-20.jpg`**：CISPO 核心点：重要性采样权重截断而非遮蔽、FP32 LM Head 精度修复，以及 Agent RL 的异常轨迹过滤。
- **00:35:33 · `frames/frame_0035_00-35-33.jpg`**：VIBE 全栈开发基准的执行、交互与视觉评估层级，强调动态运行环境，而非只看静态截图。
- **00:38:42 · `frames/frame_0038_00-38-42.jpg`**：SWE-Review 与 OctoBench。前者同时关注缺陷召回与幻觉率；后者覆盖用户请求、系统提示、配置、Skill、提醒、记忆与工具 Schema 等异构指令来源。

说明：画面中的规模、成绩与比较均为演讲者 / MiniMax 自述；本总结忠实呈现视频内容，但未进行外部独立验证。
