# 视觉分析记录

来源视频时长：01:11:33。画面以演讲幻灯片和讲者窗口为主，以下仅记录有信息增量的页面。

- **00:01:31 — `frames/frame_0002_00-01-31.jpg`**：报告提出三个问题：AI for AI 工作的共性；Evolution、Self-Evolution、Meta-Evolution 与 RSI 的边界；怎样落成可执行工程系统。
- **00:12:10 — `frames/frame_0009_00-12-10.jpg`**：将 AI4AI 与 Evolution 分开：前者回答“谁在改进谁”，后者回答“怎样更新”；右侧给出“提出修改—实现—执行—评价—保留/回滚”的最小循环。
- **00:18:16 — `frames/frame_0013_00-18-16.jpg`**：TaskAgent、Candidate、Evaluator 构成内循环；外层 Improver 学习搜索策略、操作集合和经验检索，使同预算下的后继更强。页面强调“better system ≠ better improver”。
- **00:24:21 — `frames/frame_0017_00-24-21.jpg`**：展示 RSI 的 L0–L3 结果强度分级，并明确指出 RSI 尚未成为普遍证明的现实；关键是持续复利，而不是一次自改。
- **00:28:55 — `frames/frame_0020_00-28-55.jpg`**：NatureGym 任务筛选漏斗：约 5,500 篇候选，经论文、可提取性、数据、可运行性和真实性校准等关口，最终得到 90 个任务。
- **00:35:01 — `frames/frame_0024_00-35-01.jpg`**：训练与搜索共享 Draft、Improve、Debug、Crossover 四个原子操作，使训练经验、模型能力、测试时搜索和新轨迹形成同一语义闭环。
- **00:38:03 — `frames/frame_0026_00-38-03.jpg`**：Evolutionary RL 把不同任务的异质指标映射到统一奖励范围，使用自适应上下界处理奖励尺度。
- **00:39:35 — `frames/frame_0027_00-39-35.jpg`**：奖励设计不只鼓励“高于平均”，而是用 entropic advantage 放大创造 New Best 的上尾信号。
- **00:41:06 — `frames/frame_0028_00-41-06.jpg`**：OpenMLE-Evo 的经验卡和记忆注入流程。节点按质量、相对进步和新颖性加权选择，祖先与兄弟节点经验用于生成新节点。
- **00:42:37 — `frames/frame_0029_00-42-37.jpg`**：MLE-Bench Lite 主结果。幻灯片报告 Frontis-MA1 35B + OpenMLE-Evo-Max 的 medal avg@3 为 71.2；这些数值属于讲者/论文报告，未独立复核。
- **00:44:09 — `frames/frame_0030_00-44-09.jpg`**：NatureBench 泛化结果。幻灯片给出 Frontis-MA1-35B + OpenMLE-Evo NB adapter 的 All S 30%、All M 70%，与 GPT-5.4 + Codex 所列结果相同；未独立复核。
- **00:45:40 — `frames/frame_0031_00-45-40.jpg`**：总结页提出“从会改走向更会改”：可验证任务、统一执行闭环、经验双落点、改进器评测，并列出迈向 RSI 的三个后续方向。

