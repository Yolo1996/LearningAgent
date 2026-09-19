const notes = [
  {
    slug: 'agentic-skill', title: '从经验到能力：Agentic Skill 的形成、内化与自进化', shortTitle: 'Agentic Skill：形成、内化与自进化',
    topic: 'Agent & Skill', color: 'cyan', duration: '31:18', updated: '2026.09.18', progress: 72,
    tags: ['Agent', 'Skill', 'ThoughtICR', 'TemplateRL', 'SEED'], source: 'https://www.bilibili.com/video/BV1qa4X6LET8/',
    summary: 'Agent 的轨迹只有被抽象成可复用 Skill、通过训练进入模型参数，并在环境反馈中持续更新，才会从一次性经验变成稳定能力。',
    points: ['轨迹不等于能力：原始成功案例昂贵、冗长且高度依赖上下文，必须先压缩成可迁移的策略结构。','ThoughtICR 从成功与失败轨迹中提炼推理模板，把“发生了什么”改写为“下一次如何做”。','TemplateRL 用模板引导强化学习；它更准确地说是 template-guided RL，而非简单把文本模板写入参数。','SEED 把 Skill 放入训练期教师分支，让学生在推理时脱离外部 Skill 也能执行，并允许经验随新反馈更新。'],
    sections: [
      { title: '为什么需要 Skill：轨迹不等于能力', time: '02:09–04:02', body: '成功轨迹携带工具调用、环境状态和大量偶然细节。直接存储会造成检索负担，也难以迁移。Skill 的角色是保留决策骨架：触发条件、关键步骤、失败信号与修正策略。' },
      { title: 'Skill 的形成：ThoughtICR', time: '04:03–08:04', body: '系统对轨迹进行比较和反思，提炼可复用的“思考指令”。重点不在复述答案，而在找出哪一步改变了结果，以及哪些失败具有一般性。' },
      { title: 'Skill 的内化：TemplateRL', time: '08:05–14:38', body: '模板作为训练脚手架指导探索，使模型更容易访问高价值状态。真正的内化要在移除模板后仍保持表现，因此评估必须区分提示依赖与参数能力。' },
      { title: '持续更新：SEED', time: '14:38–21:28', body: 'Skill 进入教师分支生成更优监督信号，学生只观察任务本身。新经验再回流到 Skill 库与模型训练，形成经验提炼、教学、验证、更新的闭环。' },
      { title: '开放问题', time: 'Q&A', body: '如何避免自我提炼导致策略单一？Skill 应按任务、模型还是环境版本治理？跨任务迁移的有效边界如何验证？这些问题决定系统会形成复利，还是把早期偏差不断放大。' }
    ]
  },
  {
    slug: 'rsi', title: 'AI for AI：从进化、自进化与元进化，迈向递归自我改进', shortTitle: '从自进化到递归自我改进',
    topic: 'Self-Evolution', color: 'coral', duration: '1:11:34', updated: '2026.09.17', progress: 100,
    tags: ['RSI', 'AI4AI', 'Meta-Evolution', 'Memory', 'OpenMLE'], source: 'https://www.bilibili.com/video/BV13ZgA64Ept/',
    summary: '自进化让任务系统越用越强，元进化进一步让改进器本身变强；只有升级后的改进器能接管下一轮并持续产生更强后继，才真正接近 RSI。',
    points: ['AI4AI 是应用方向；进化、自进化、元进化和 RSI 描述的是不同层级的改进机制。','循环不等于学习。只有执行反馈被筛选、沉淀并改变下一轮行为，系统才产生可积累的改进。','经验有三个落点：外部记忆、测试时搜索机制和模型参数；三者承担不同的更新速度与泛化责任。','判断 RSI 的强标准是连续代际复利：改进器不仅产出更好方案，还能产出更强的下一代改进器。'],
    sections: [
      { title: '四个概念处在不同层次', time: '04:00–25:00', body: '进化关注候选方案的选择与变异；自进化强调系统利用自身经验提升任务表现；元进化把改进策略本身变成优化对象；RSI 则要求改进器持续接管后续迭代。' },
      { title: '经验必须落盘', time: '25:00–31:00', body: '如果系统只在同一任务上反复采样，而不保存起始状态、修改动作、执行结果和评价变化，循环就只是更昂贵的重试。高价值问题必须被转成可执行、可评价、可重放的任务。' },
      { title: 'Frontis‑MA1 / OpenMLE 闭环', time: '31:00–46:00', body: '训练与测试共享一套动作语义：生成、改写、调试与组合。搜索树中的高质量解、父错子对的 Debug 边和失败证据共同成为训练数据。' },
      { title: 'Evolutionary RL 与经验记忆', time: '核心机制', body: '异质指标先映射为统一奖励，优化目标奖励 New Best 而非仅高于平均。经验卡记录适用范围、失败条件和版本，供后续搜索与训练共同使用。' },
      { title: '落地判断', time: '行动清单', body: '从窄而可验证的任务开始；分开任务经验与改进经验；治理经验库；单独评测 Improver 的单位预算增益、迁移与 Reward Hacking；用连续代际而非单次结果验证 RSI。' }
    ]
  },
  {
    slug: 'mendel-godel-machine', title: 'Mendel Gödel Machine：让自进化智能体学会比较、继承与进化', shortTitle: 'Mendel Gödel Machine',
    topic: 'Self-Evolution', color: 'coral', duration: '56:26', updated: '2026.09.16', progress: 38,
    tags: ['MGM', 'Self-Modification', 'Evolution', 'Archive', 'Agent'], source: 'https://www.bilibili.com/video/BV1p3YJ6VEBb/',
    summary: 'Mendel Gödel Machine 把自修改从单一路径改成带谱系的经验搜索：候选体比较、继承、组合并保留失败证据，使“记忆”升级为实验设计。',
    points: ['经典 Gödel Machine 追求可证明的自修改收益，MGM 转向可执行评估与经验搜索。','三类算子承担不同角色：局部修改、从历史候选继承，以及跨谱系组合。','Archive 不是成功案例仓库，而是带评测、环境与血缘信息的实验记录。','跨谱系继承可能跳出局部最优，但也会引入兼容性、归因与评估污染问题。'],
    sections: [
      { title: '从理论 Gödel Machine 到经验型自修改', time: '01:19–09:04', body: '理论方案依赖严格证明，难以覆盖开放环境。经验型路线以真实执行结果作为筛选信号，接受局部、可验证、可回滚的改进。' },
      { title: '三种自修改算子', time: '17:25–24:24', body: '系统既能沿当前谱系微调，也能继承历史优胜体，还能跨谱系组合互补策略。关键是每次修改都有可比较的基线与明确预算。' },
      { title: '为什么跨谱系继承有效', time: '28:03–33:15', body: '不同谱系探索了不同区域。把有效结构迁移到另一条路径，有机会绕过单一路径的历史包袱，但必须重做兼容性验证。' },
      { title: '我的解读：记忆升级为实验设计', time: 'Takeaway', body: '最有价值的不是保存“好答案”，而是保存什么改动在什么环境里带来了多少提升。这样记忆才能指导下一次实验，而不是只做相似文本检索。' }
    ]
  },
  {
    slug: 'tian-rsi', title: '对话田渊栋：AI 自进化如何到来', shortTitle: 'AI 自进化如何到来',
    topic: 'Self-Evolution', color: 'coral', duration: '1:24:28', updated: '2026.09.15', progress: 100,
    tags: ['RSI', 'Research Loop', 'AutoML', 'Coding Agent', 'Safety'], source: 'https://www.bilibili.com/video/BV1XnuH66EzS/',
    summary: 'RSI 的现实起点不是“无人研究”，而是让模型把研究循环压缩：提出假设、修改代码、运行实验、读结果，再把新经验进入下一轮。',
    points: ['关键变化是研究循环被压缩，而不是简单减少人类参与。','与早期 AutoML 相比，大模型可以操作更开放的研究对象，并用自然语言吸收背景知识。','编码能力是 RSI 的基础设施，而非能力上限；真正瓶颈在数据、算力、评价与解释。','价值会逐级出现，不需要等到终极 RSI：实验自动化、研究助理和闭环优化本身已可创造收益。'],
    sections: [
      { title: '为什么 RSI 重新变热', time: '概念', body: '代码模型、工具使用和长上下文把“提出想法—执行—评估”的闭环接了起来。系统开始能够触碰自身能力形成过程，而不只是完成静态任务。' },
      { title: '与 AutoML 的本质区别', time: '历史比较', body: 'AutoML 多在预定义空间中搜索；新一代 Agent 能读论文、改训练代码、设计实验并解释结果，动作空间与知识来源更开放。' },
      { title: '瓶颈与风险', time: '下一阶段', body: '高质量反馈仍稀缺，实验代价高，失败难归因。安全问题不只来自最终能力，也来自系统为优化指标主动改变工具链、数据和评估方式。' },
      { title: '对研究者与组织的影响', time: '可执行启示', body: '优先把可重放实验、统一日志和机器可读评测建设成基础设施。研究者的杠杆会逐渐从亲自执行每一步，转向设计问题、验证证据与治理闭环。' }
    ]
  },
  {
    slug: 'mimo-rl', title: 'MiMo‑V2.6 强化学习训练：视频总结与后训练技术导读', shortTitle: 'MiMo‑V2.6 强化学习训练',
    topic: 'Post-training', color: 'violet', duration: '09:22', updated: '2026.09.14', progress: 64,
    tags: ['GRPO', 'RLVR', 'Async RL', 'Verifier', 'Agentic RL'], source: 'https://www.bilibili.com/video/BV1RHe26VE4M/',
    summary: '规模化 RL 的瓶颈不是单一算法，而是经验、评价与学习闭环的系统语义能否在异步、高吞吐条件下保持正确。',
    points: ['一步训练消耗的 Token 来自 prompts × group rollouts × response length，吞吐必须与有效学习信号一起看。','动态采样过滤全对/全错组，提高有效梯度密度，但会改变训练分布并增加系统调度复杂度。','Staleness 是算法指标：rollout 策略与更新后策略相差过大时，数据再多也可能产生错误方向。','进入 Agentic RL 前，应先审计 verifier、环境可重放性与训练—推理一致性。'],
    sections: [
      { title: '训练闭环与规模', time: '视频快照', body: '大规模 rollout、执行验证与参数更新构成流水线。不能只看 GPU 数量：推理服务、环境执行、结果校验、网络与数据调度同样决定实际利用率。' },
      { title: 'GRPO 与动态采样', time: '算法', body: '组内相对优势省去独立价值模型。动态采样让训练集中在“有分歧、可学习”的任务，但需要监控被过滤任务的分布与长期覆盖。' },
      { title: '异步、Staleness 与一致性', time: '系统', body: '同步等待慢样本浪费算力，完全异步又会放大策略陈旧。相同权重在不同推理引擎、采样配置和数值精度下也可能不是同一行为策略。' },
      { title: '第一次实训练路线', time: '实践', body: '先只采样不更新；再跑最小同步 GRPO；随后逐项做动态采样、损失粒度、group size 和修正策略消融；最后才进入工具环境中的 Agentic RL。' }
    ]
  },
  {
    slug: 'sft-rl-opd', title: '从分布视角看 SFT、RL、OPD 的区别', shortTitle: 'SFT、RL、OPD：分布视角',
    topic: 'Post-training', color: 'violet', duration: '28:09', updated: '2026.09.13', progress: 22,
    tags: ['SFT', 'RL', 'OPD', 'On-policy', 'Distillation'], source: 'https://www.bilibili.com/video/BV1d6356hE41/',
    summary: '三种方法的首要差异不是损失函数，而是训练轨迹从哪里来：外部示范、模型自身探索，或模型自身轨迹上的教师密集反馈。',
    points: ['SFT 在外部数据分布上学习，稳定直接，但可能把模型拉向示范分布并覆盖原有能力。','RL 让模型在自己的状态分布上探索，以结果奖励调整策略，反馈稀疏但更接近真实推理。','OPD/OPSD 在学生自身轨迹上提供 token 级教师信号，兼具 on-policy 状态与密集反馈。','on-policy 的核心价值是模型亲自进入自己会访问的状态，从而学习如何纠正真实错误。'],
    sections: [
      { title: '语言模型是序列条件分布', time: '分布视角', body: '训练方法改变的不只是单个答案，还会改变模型访问哪些前缀状态。用分布视角观察数据来源、更新范围和遗忘风险，比只比较损失函数更有解释力。' },
      { title: '三种方法的信号结构', time: '方法比较', body: 'SFT 使用教师轨迹；RL 使用学生轨迹与序列级奖励；OPD 使用学生轨迹，再由教师提供密集 token 信号。它们分别在稳定性、探索和信号精度上取舍。' },
      { title: '为什么 on-policy 可能更泛化', time: '核心解释', body: '模型会生成训练集未覆盖的中间状态。只有亲自走进这些状态并收到反馈，才可能学会恢复，而不是依赖一条永远不会偏离的标准路径。' },
      { title: '推荐组合路线', time: '实践', body: '用 SFT 建立起点，用 on-policy 方法对齐真实状态分布，再引入可信的细粒度反馈。未来方向是同时保持 on-policy 与准确 token 级信用分配。' }
    ]
  },
  {
    slug: 'minimax-agent-posttraining', title: 'MiniMax M2.1：Agent 后训练的经验与认知', shortTitle: 'MiniMax M2.1 Agent 后训练',
    topic: 'Agent & Skill', color: 'cyan', duration: '1:01:43', updated: '2026.09.12', progress: 0,
    tags: ['Agentic RL', 'SWE', 'Forge', 'CISPO', 'Evaluation'], source: 'https://www.bilibili.com/video/BV1H8iCBEEgT/',
    summary: 'Agent 后训练首先是数据与系统工程：任务覆盖、环境真实性、奖励可信度、rollout 质量、优化稳定性和评测贴近度形成乘法系统。',
    points: ['GitHub 历史可以转成可验证的软件工程任务，但必须校验问题描述、代码状态与测试的一致性。','开放式 AppDev 没有固定答案，需要专家与 Agent 共建可执行 rubric。','Forge 对 Agent 内部逻辑做最小假设，用统一环境承载不同脚手架与 rollout。','真实评测必须进入运行状态；静态文本评分无法覆盖工具、环境和长程交互中的失败。'],
    sections: [
      { title: 'SWE 数据：把 GitHub 历史变成任务', time: '数据', body: '从真实 PR 恢复问题、代码与测试，经过可解性和一致性过滤。若描述缺关键条件，即使测试真实，样本也可能天然不可解。' },
      { title: 'AppDev 与 WebExplorer', time: '开放任务', body: 'AppDev 用专家定义的布尔检查提高奖励稳定性；WebExplorer 先探索环境，再让问题随可见信息逐步进化，以构造长程搜索任务。' },
      { title: 'Forge 与 CISPO', time: '训练系统', body: 'Forge 统一运行不同 Agent 脚手架；CISPO 处理裁剪、优势和长轨迹训练中的稳定性问题。上层优化方法与 MoE/Dense 架构相对解耦。' },
      { title: '评测必须进入真实运行状态', time: '评估', body: '能力评测要覆盖安装、执行、工具错误、状态保持与多轮恢复。没有可执行环境和可信奖励，扩大采样只会更快放大噪声。' }
    ]
  }
];

const topicMeta = {
  'Agent & Skill': { code: '01', description: '技能形成、工具使用、软件工程任务与 Agent 后训练。' },
  'Self-Evolution': { code: '02', description: '经验沉淀、改进器、搜索谱系与递归自我改进。' },
  'Post-training': { code: '03', description: 'SFT、强化学习、蒸馏、验证器与大规模训练系统。' },
  'Context Engineering': { code: '04', description: '上下文组织、记忆与可复用经验的注入方式。' },
  'Evaluation': { code: '05', description: '动态评测、可执行验证、证据边界与失效分析。' }
};

const app = document.getElementById('app');
const shell = document.querySelector('.shell');
const searchInput = document.getElementById('searchInput');
const navLinks = [...document.querySelectorAll('.primary-nav a')];
const savedProgress = JSON.parse(localStorage.getItem('llm-fieldnotes-progress') || '{}');
notes.forEach(note => { if (savedProgress[note.slug] !== undefined) note.progress = savedProgress[note.slug]; });
const completedCount = () => notes.filter(note => note.progress === 100).length;
const averageProgress = () => Math.round(notes.reduce((sum, note) => sum + note.progress, 0) / notes.length);
const allTags = () => [...new Set(notes.flatMap(note => note.tags))];
function syncSidebar() { document.documentElement.style.setProperty('--learning-progress', `${averageProgress()}%`); }

function noteCard(note, compact = false) {
  const index = String(notes.indexOf(note) + 1).padStart(2, '0');
  return `<a class="note-card ${compact ? 'compact' : ''}" href="#/note/${note.slug}"><div class="card-visual"><span class="visual-code">FIELDNOTE / ${index}</span><strong class="visual-topic">${note.topic}</strong><span class="visual-number">${index}</span></div><div class="card-body"><div class="card-top"><span class="topic-dot ${note.color}"></span><span>${note.topic}</span><time>${note.duration}</time></div><h3>${note.shortTitle}</h3><p>${note.summary}</p><div class="tag-row">${note.tags.slice(0,3).map(tag => `<span>${tag}</span>`).join('')}</div><div class="card-progress"><span>${note.progress === 100 ? '已完成' : note.progress ? `已读 ${note.progress}%` : '待读'}</span><i><b style="width:${note.progress}%"></b></i></div></div></a>`;
}

function renderHome() {
  const recent = [...notes].slice(0, 3);
  app.innerHTML = `<section class="home-hero"><div class="hero-copy"><p class="eyebrow">LLM LEARNING · KNOWLEDGE INDEX</p><h1>大模型学习<br>知识索引</h1><p class="intro">围绕后训练、Agent 能力与自进化建立一套可追踪、可检索、可持续维护的结构化学习笔记。</p></div><div class="hero-stats" aria-label="学习数据"><article><small>已整理笔记</small><strong>0${notes.length}</strong><span>来自视频学习</span></article><article><small>主题覆盖</small><strong>05</strong><span>训练 · Agent · 进化</span></article><article><small>学习完成度</small><strong>${averageProgress()}%</strong><span>${completedCount()} / ${notes.length} 已完成</span></article><article><small>概念索引</small><strong>${allTags().length}</strong><span>可检索知识节点</span></article></div></section>
  <section class="section-block"><div class="section-heading"><div><p class="eyebrow">CONTINUE LEARNING</p><h2>继续学习</h2></div><a href="#/notes">查看全部 →</a></div><div class="note-grid">${recent.map(note => noteCard(note)).join('')}</div></section>
  <section class="section-block split-section"><div><div class="section-heading"><div><p class="eyebrow">TOPIC INDEX</p><h2>学习主题</h2></div><a href="#/topics">完整路线 →</a></div><div class="topic-list">${Object.entries(topicMeta).map(([name, meta]) => `<a href="#/topics"><span>${meta.code}</span><div><strong>${name}</strong><small>${notes.filter(n => n.topic === name || n.tags.includes(name)).length} 篇相关笔记</small></div><i>↗</i></a>`).join('')}</div></div><aside class="update-panel"><p class="eyebrow">LATEST UPDATE</p><h3>最近整理</h3>${recent.map(note => `<a href="#/note/${note.slug}"><time>${note.updated.slice(5)}</time><span>${note.shortTitle}</span></a>`).join('')}<p class="source-note">内容已从本地“视频学习”材料中整理；视频观点与实验数字保留原笔记的证据边界。</p></aside></section>`;
}

function renderNotes(query = '') {
  const q = query.trim().toLowerCase();
  const filtered = notes.filter(note => [note.title, note.topic, note.summary, ...note.tags, ...note.points].join(' ').toLowerCase().includes(q));
  app.innerHTML = `<section class="page-head"><div><p class="eyebrow">NOTE ARCHIVE</p><h1>全部笔记</h1><p>按主题、方法与关键概念检索，持续扩充的个人大模型知识库。</p></div><span class="count-badge">${filtered.length} / ${notes.length}</span></section><div class="filter-row"><button class="filter active" data-filter="all">全部</button>${[...new Set(notes.map(n => n.topic))].map(topic => `<button class="filter" data-filter="${topic}">${topic}</button>`).join('')}</div><div class="archive-grid" id="archiveGrid">${filtered.length ? filtered.map(note => noteCard(note, true)).join('') : `<div class="empty-state"><strong>没有找到相关笔记</strong><span>试试 “Agent”“RL”“经验” 或 “评测”。</span></div>`}</div>`;
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.filter').forEach(item => item.classList.toggle('active', item === button)); const subset = button.dataset.filter === 'all' ? notes : notes.filter(note => note.topic === button.dataset.filter); document.getElementById('archiveGrid').innerHTML = subset.map(note => noteCard(note, true)).join(''); }));
}

function renderTopics() {
  app.innerHTML = `<section class="page-head"><div><p class="eyebrow">LEARNING MAP</p><h1>学习主题</h1><p>从能力形成到自我改进，再回到训练与评测基础设施。</p></div></section><div class="roadmap-line">${Object.entries(topicMeta).map(([name, meta]) => { const related = notes.filter(n => n.topic === name || n.tags.includes(name)); const status = related.length ? `${related.filter(n => n.progress === 100).length}/${related.length} 已完成` : '等待补充'; return `<article class="roadmap-item ${related.length ? '' : 'muted-item'}"><div class="roadmap-index">${meta.code}</div><div class="roadmap-body"><div class="roadmap-title"><h2>${name}</h2><span>${status}</span></div><p>${meta.description}</p><div class="roadmap-notes">${related.length ? related.map(note => `<a href="#/note/${note.slug}"><span class="topic-dot ${note.color}"></span>${note.shortTitle}<i>${note.progress}%</i></a>`).join('') : `<span class="planned">计划：补充长上下文、记忆治理与动态评测笔记</span>`}</div></div></article>`; }).join('')}</div>`;
}

function renderProgress() {
  const avg = averageProgress();
  app.innerHTML = `<section class="page-head"><div><p class="eyebrow">LEARNING STATUS</p><h1>学习进度</h1><p>进度保存在当前浏览器中。完成一篇笔记后，可在详情页更新状态。</p></div></section><section class="progress-dashboard"><div class="progress-ring" style="--value:${avg * 3.6}deg"><div><strong>${avg}%</strong><span>总进度</span></div></div><div class="progress-summary"><div><strong>${completedCount()}</strong><span>已完成</span></div><div><strong>${notes.filter(n => n.progress > 0 && n.progress < 100).length}</strong><span>学习中</span></div><div><strong>${notes.filter(n => n.progress === 0).length}</strong><span>待读</span></div></div></section><section class="section-block"><div class="section-heading"><div><p class="eyebrow">READING QUEUE</p><h2>笔记进度</h2></div></div><div class="progress-list">${notes.map(note => `<a href="#/note/${note.slug}"><span class="topic-dot ${note.color}"></span><div><strong>${note.shortTitle}</strong><small>${note.topic} · ${note.duration}</small></div><output>${note.progress}%</output><i><b style="width:${note.progress}%"></b></i></a>`).join('')}</div></section>`;
}

function renderNote(slug) {
  const note = notes.find(item => item.slug === slug);
  if (!note) { renderNotFound(); return; }
  const related = notes.filter(item => item.slug !== slug && (item.topic === note.topic || item.tags.some(tag => note.tags.includes(tag)))).slice(0, 2);
  app.innerHTML = `<article class="note-detail"><a class="back-link" href="#/notes">← 返回笔记库</a><header class="note-hero"><div class="note-meta"><span class="topic-dot ${note.color}"></span><span>${note.topic}</span><time>${note.updated}</time><span>${note.duration}</span></div><h1>${note.title}</h1><p class="note-lead">${note.summary}</p><div class="detail-actions"><button id="completeButton" class="primary-button">${note.progress === 100 ? '✓ 已完成' : '标记为已完成'}</button><a class="secondary-button" href="${note.source}" target="_blank" rel="noopener">原视频 ↗</a></div></header><div class="note-layout"><aside class="note-toc"><p class="eyebrow">ON THIS PAGE</p>${note.sections.map((section, index) => `<a href="#section-${index + 1}"><span>0${index + 1}</span>${section.title}</a>`).join('')}<div class="detail-progress"><small>阅读进度</small><strong>${note.progress}%</strong><i><b style="width:${note.progress}%"></b></i></div></aside><div class="note-content"><section class="key-points"><p class="eyebrow">CORE IDEAS</p><h2>核心观点</h2><ol>${note.points.map(point => `<li>${point}</li>`).join('')}</ol></section>${note.sections.map((section, index) => `<section class="reading-section" id="section-${index + 1}"><div class="section-number">0${index + 1}</div><div><time>${section.time}</time><h2>${section.title}</h2><p>${section.body}</p></div></section>`).join('')}<section class="evidence-box"><strong>资料边界</strong><p>本页依据“视频学习”中的自动转写、画面核对与既有总结整理。实验数字与项目结论按原视频或讲者表述记录，未作独立事实核验。</p></section></div><aside class="note-aside"><div><p class="eyebrow">TAGS</p>${note.tags.map(tag => `<a href="#/notes?q=${encodeURIComponent(tag)}"># ${tag}</a>`).join('')}</div><div><p class="eyebrow">RELATED</p>${related.map(item => `<a class="related-link" href="#/note/${item.slug}">${item.shortTitle}<span>→</span></a>`).join('')}</div></aside></div></article>`;
  document.getElementById('completeButton').addEventListener('click', () => { note.progress = note.progress === 100 ? 0 : 100; savedProgress[note.slug] = note.progress; localStorage.setItem('llm-fieldnotes-progress', JSON.stringify(savedProgress)); syncSidebar(); renderNote(slug); });
}

function renderNotFound() { app.innerHTML = `<div class="empty-state standalone"><strong>这个页面还没有笔记</strong><span>返回知识库继续浏览现有内容。</span><a class="primary-button" href="#/">回到总览</a></div>`; }
function setActiveNav(route) { navLinks.forEach(link => { const target = link.getAttribute('href').slice(1); link.classList.toggle('active', target === '/' ? route === '/' : route.startsWith(target)); }); }
function route() { const raw = location.hash.slice(1) || '/'; const [path, queryString = ''] = raw.split('?'); const params = new URLSearchParams(queryString); setActiveNav(path); shell.classList.remove('nav-open'); if (path === '/') renderHome(); else if (path === '/notes') { const query = params.get('q') || ''; searchInput.value = query; renderNotes(query); } else if (path === '/topics') renderTopics(); else if (path === '/progress') renderProgress(); else if (path.startsWith('/note/')) renderNote(path.split('/')[2]); else renderNotFound(); window.scrollTo({ top: 0, behavior: 'instant' }); }

document.querySelector('.menu-button')?.addEventListener('click', () => shell.classList.toggle('nav-open'));
document.getElementById('themeToggle')?.addEventListener('click', () => { const dark = document.documentElement.classList.toggle('dark'); localStorage.setItem('llm-fieldnotes-theme', dark ? 'dark' : 'light'); });
if (localStorage.getItem('llm-fieldnotes-theme') === 'dark') document.documentElement.classList.add('dark');
document.addEventListener('keydown', event => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); searchInput.focus(); } if (event.key === 'Escape') { searchInput.blur(); shell.classList.remove('nav-open'); } });
searchInput.addEventListener('input', event => { const query = event.target.value; if (!location.hash.startsWith('#/notes')) location.hash = `/notes?q=${encodeURIComponent(query)}`; else renderNotes(query); });
window.addEventListener('hashchange', route);
syncSidebar();
route();
