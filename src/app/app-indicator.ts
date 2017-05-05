import {Indicator} from "./module/ui/Indicator";
import {Path} from "./module/ui/Path";
/**
 * Created by jsen on 2017/4/22.
 */

export class IDNMap {
  public static ids = {
    'dashboard':new Indicator('主面板', '功能', [new Path("Chaos", "chaos"),new Path("主面板", "chaos"),new Path("功能", "")]),
    'note':new Indicator('笔记', '读书笔记', [new Path("Chaos", "chaos"),new Path("信息编辑", "note"),new Path("笔记", "")]),
    'uiicons':new Indicator('UI库', '图标', [new Path("Chaos", "chaos"),new Path("UI库", "uiicons"),new Path("图标", "")]),
    'noteedite':new Indicator('笔记', '读书笔记', [new Path("Chaos", "chaos"),new Path("信息编辑", "note"),new Path("笔记", "note"),new Path("编辑", "")]),
  };
}
