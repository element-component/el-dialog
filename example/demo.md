# el-dialog
> el-dialog

-----------
<p @click="dialogVisible = true">打开 Dialog</p>
<el-dialog title="Dialog" :visible.sync="dialogVisible" width="400">
  <span>test</span>
  <span slot="footer" class="dialog-footer">
    <button @click="dialogVisible = false">取消</button>
    <button @click="dialogVisible = false">确定</button>
  </span>
</el-dialog>